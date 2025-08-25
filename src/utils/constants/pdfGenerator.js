import jsPDF from 'jspdf';

// Função para quebrar texto de forma inteligente
function wrapText(doc, text, maxWidth, maxHeight, startY) {
    const lines = doc.splitTextToSize(text, maxWidth);
    const lineHeight = 6;
    const totalHeight = lines.length * lineHeight;
    
    // Se o texto não cabe na página atual, adiciona nova página
    if (startY + totalHeight > maxHeight) {
        doc.addPage();
        return { yOffset: 10, lines };
    }
    
    return { yOffset: startY, lines };
}



// Função para extrair resposta formatada baseada no tipo de questão
function formatResponse(question, selectedOption, index, score) {
    // Verifica se a questão existe e é válida
    if (!question || typeof question !== 'object') {
        return "Questão inválida";
    }

    // Verifica se a questão tem um tipo definido
    if (!question.type) {
        // Para questões sem tipo específico, trata como questão normal
        if (question.options) {
            const option = question.options.find(opt => opt.value === selectedOption);
            return option ? option.label : "Não respondida";
        }
        
        if (score.options) {
            const option = score.options.find(opt => opt.value === selectedOption);
            return option ? option.label : "Não respondida";
        }
        
        return selectedOption || "Não respondida";
    }

    if (question.type === 'text-input') {
        const response = selectedOption || "Não respondida";
        // Limita o tamanho do texto para evitar overflow no PDF
        return response.length > 200 ? response.substring(0, 200) + "..." : response;
    }
    
    if (question.type === 'rucam-alternative-causes') {
        if (typeof selectedOption === 'object' && selectedOption && selectedOption.type === 'rucam-alternative-causes') {
            let response = [];
            
            if (selectedOption.highlyProbable) {
                response.push("✓ Causa alternativa altamente provável");
            }
            
            if (selectedOption.groupI && Array.isArray(selectedOption.groupI)) {
                response.push("Grupo I:");
                selectedOption.groupI.forEach((item, i) => {
                    if (item && typeof item === 'object') {
                        if (item.negative) {
                            response.push(`  - ${question.groupI[i]}: Negativo`);
                        } else if (item.notDone) {
                            response.push(`  - ${question.groupI[i]}: Não realizado`);
                        }
                    }
                });
            }
            
            if (selectedOption.groupII && Array.isArray(selectedOption.groupII)) {
                response.push("Grupo II:");
                selectedOption.groupII.forEach((item, i) => {
                    if (item && typeof item === 'object') {
                        if (item.negative) {
                            response.push(`  - ${question.groupII[i]}: Negativo`);
                        } else if (item.notDone) {
                            response.push(`  - ${question.groupII[i]}: Não realizado`);
                        }
                    }
                });
            }
            
            return response.length > 0 ? response.join('\n') : "Nenhuma causa alternativa selecionada";
        }
        return "Não respondida";
    }
    
    // Para questões normais com opções
    if (question.options) {
        const option = question.options.find(opt => opt.value === selectedOption);
        return option ? option.label : "Não respondida";
    }
    
    // Para questões que usam as opções padrão do score
    if (score.options) {
        const option = score.options.find(opt => opt.value === selectedOption);
        return option ? option.label : "Não respondida";
    }
    
    // Para valores numéricos ou outros tipos
    if (selectedOption !== null && selectedOption !== undefined) {
        return String(selectedOption);
    }
    
    return "Não respondida";
}

// Função para formatar número da questão
function formatQuestionNumber(index, score) {
    const questions = score.questions;

    if (score.key === 'bmq') {
        const current = questions[index];
        const hasPrefix = !!current.prefix;

        if (hasPrefix) {
            const count = questions
                .slice(0, index + 1)
                .filter(q => q.prefix === current.prefix).length;

            return `${current.prefix}${count}.`;
        }

        return `${index + 1}.`;
    }

    if (score.key === 'arms') {
        const armsQuestions = [
            { prefix: 'T', text: 'Esquece de tomar seus medicamentos?' },
            { prefix: 'T', text: 'Decide não tomar seus medicamentos naquele dia?' },
            { prefix: 'R', text: 'Deixa de tomar seu medicamento porque vai a uma consulta médica?' },
            { prefix: 'T', text: 'Deixa de tomar seu medicamento quando se sente melhor?' },
            { prefix: 'T', text: 'Deixa de tomar seu medicamento quando se sente mal ou doente?' },
            { prefix: 'T', text: 'Deixa de tomar seu medicamento quando está mais descuidado consigo mesmo?' },
            { prefix: 'T', text: 'Muda a dose do seu medicamento por alguma necessidade?' },
            { prefix: 'T', text: 'Esquece de tomar o medicamento quando tem que tomar mais de uma vez/dia?' },
            { prefix: 'R', text: 'Esquece de ir à farmácia pegar seus medicamentos?' },
            { prefix: 'R', text: 'Deixa acabar seus medicamentos?' },
            { prefix: 'R', text: 'Deixa de adquirir seu medicamento por causa do preço muito caro?' },
            { prefix: 'R', text: 'Se antecipa e busca seu medicamento na farmácia antes mesmo de acabar seu medicamento em casa?' }
        ];
        return `${armsQuestions[index].prefix}${index + 1}.`;
    }

    return `${index + 1}.`;
}

export function downloadPDF(score, result, selectedOptions, nomePaciente, crf, nomeFarmaceutico, data, medicamento) {
    // Validação de segurança para os parâmetros
    if (!score || !score.questions || !Array.isArray(score.questions)) {
        console.error('Score inválido ou sem questões definidas');
        return;
    }

    if (!Array.isArray(selectedOptions)) {
        console.error('selectedOptions deve ser um array');
        return;
    }

    if (!result || typeof result !== 'object') {
        console.error('Resultado inválido');
        return;
    }

    // Garante que selectedOptions tenha o tamanho correto
    const safeSelectedOptions = [...selectedOptions];
    while (safeSelectedOptions.length < score.questions.length) {
        safeSelectedOptions.push(null);
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxWidth = pageWidth - 20; // Margem de 10px em cada lado

    let yOffset = 10;

    // === Cabeçalho ===
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    
    // Trata títulos longos com quebra de linha automática
    let titleLines = doc.splitTextToSize(score.label, maxWidth);
    
    // Se o título for muito longo (mais de 3 linhas), reduz o tamanho da fonte
    if (titleLines.length > 3) {
        doc.setFontSize(14);
        titleLines = doc.splitTextToSize(score.label, maxWidth);
    }
    
    let titleY = 25;
    
    titleLines.forEach((line, index) => {
        doc.text(line, pageWidth / 2, titleY, { align: 'center' });
        titleY += 6; // Espaçamento entre linhas do título
    });
    
    // Ajusta a posição das informações do cabeçalho baseado no número de linhas do título
    const titleHeight = titleLines.length * 6;
    const headerStartY = 25 + titleHeight + 5; // 5px de espaço após o título

    // Informações do cabeçalho
    doc.setFontSize(13);
    doc.setFont(undefined, 'normal');
    
    const headerInfo = [
        `Resultado: ${result.result}`,
        `Paciente: ${nomePaciente || 'Não informado'}`,
        `CRF: ${crf || 'Não informado'}`,
        `Farmacêutico: ${nomeFarmaceutico || 'Não informado'}`,
        `Medicamento: ${medicamento || 'Não informado'}`,
        `Data: ${data || 'Não informada'}`
    ];

    headerInfo.forEach((info, index) => {
        const lines = doc.splitTextToSize(info, maxWidth);
        lines.forEach(line => {
            doc.text(line, 10, headerStartY + (index * 6));
        });
    });

    // Linha separadora
    doc.setDrawColor(0, 102, 51);
    doc.setLineWidth(0.5);
    const separatorY = headerStartY + (headerInfo.length * 6) + 5; // 5px após o último item do cabeçalho
    doc.line(10, separatorY, pageWidth - 10, separatorY);

    // === Título das Perguntas ===
    doc.setFontSize(15);
    doc.setFont(undefined, 'bold');
    const questionsTitleY = separatorY + 8; // 8px após a linha separadora
    doc.text("Respostas do Questionário:", 10, questionsTitleY);
    yOffset = questionsTitleY + 8; // 8px após o título das perguntas

    // === Perguntas ===
    doc.setFontSize(13);
    doc.setFont(undefined, 'normal');

    try {
        // Filtra apenas questões válidas antes de processar
        const validQuestions = score.questions.filter(question => 
            question && typeof question === 'object' && question.text
        );

        validQuestions.forEach((question, index) => {
            // Verifica se precisa de nova página - reduzido para caber mais conteúdo
            if (yOffset > pageHeight - 40) { // Reduced from 80 to 40 for more content per page
                doc.addPage();
                yOffset = 25; // Reset para posição consistente em novas páginas
            }

            const questionNumber = formatQuestionNumber(index, score);
            const resposta = formatResponse(question, safeSelectedOptions[index], index, score);

            // Número e texto da pergunta
            doc.setFont(undefined, 'bold');
            const questionText = `${questionNumber} ${question.text}`;
            const questionLines = doc.splitTextToSize(questionText, maxWidth);
            
            questionLines.forEach(line => {
                doc.text(line, 10, yOffset);
                yOffset += 5; // Increased from 4 to 5 for better readability
            });

            // Pequeno espaço entre pergunta e resposta
            yOffset += 2;

            // Resposta
            doc.setFont(undefined, 'normal');
            doc.setTextColor(0, 102, 51);
            
            const respostaLines = doc.splitTextToSize(`Resposta: ${resposta}`, maxWidth);
            respostaLines.forEach(line => {
                doc.text(line, 15, yOffset);
                yOffset += 5; // Increased from 4 to 5 for better readability
            });

            doc.setTextColor(0, 0, 0);
            yOffset += 6; // Increased from 4 to 6 for better separation

            // Linha separadora entre questões (exceto na última)
            if (index < validQuestions.length - 1) {
                doc.setDrawColor(200, 200, 200);
                doc.setLineWidth(0.2);
                doc.line(10, yOffset, pageWidth - 10, yOffset);
                yOffset += 6; // Increased from 4 to 6 for better separation
            }
        });
    } catch (error) {
        console.error('Erro ao processar questões:', error);
        doc.text('Erro ao processar questões do questionário', 10, yOffset);
        yOffset += 20;
    }

    // === Recomendação ===
    if (yOffset > pageHeight - 50) { // Reduced from 100 to 50 for more content per page
        doc.addPage();
        yOffset = 25;
    }

    // Adiciona espaço antes da seção de recomendação
    yOffset += 8;
    
    // Título da seção com melhor formatação
    doc.setFontSize(15);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(0, 102, 51);
    doc.text("Recomendação:", 10, yOffset);
    yOffset += 8; // Mais espaço após o título

    // Linha decorativa abaixo do título
    doc.setDrawColor(0, 102, 51);
    doc.setLineWidth(0.3);
    doc.line(10, yOffset, 50, yOffset);
    yOffset += 6; // Espaço após a linha

    doc.setFontSize(13);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);

    try {
        // Processa a recomendação linha por linha
        if (!result.feedback) {
            doc.text('Nenhuma recomendação disponível', 10, yOffset);
            yOffset += 20;
        } else {
            const linhasRecomendacao = result.feedback.split("\n");
            linhasRecomendacao.forEach((linha, index) => {
                if (!linha.trim()) {
                    yOffset += 6; // Mais espaço para linhas vazias
                    return;
                }

                // Verifica se precisa de nova página
                if (yOffset > pageHeight - 30) {
                    doc.addPage();
                    yOffset = 25;
                }

                const linhaTratada = linha.trimStart();
                
                // Verifica se é um item de lista (começa com hífen ou bullet)
                const isListItem = linhaTratada.startsWith('-') || linhaTratada.startsWith('•') || linhaTratada.startsWith('*');
                
                if (isListItem) {
                    // Formata itens de lista com indentação e bullet personalizado
                    doc.setFont(undefined, 'bold');
                    doc.setTextColor(0, 102, 51);
                    doc.text('•', 10, yOffset);
                    doc.setFont(undefined, 'normal');
                    doc.setTextColor(0, 0, 0);
                    
                    const textoItem = linhaTratada.replace(/^[-•*]\s*/, ''); // Remove o marcador original
                    const partes = doc.splitTextToSize(textoItem, maxWidth - 15); // Margem para o bullet
                    
                    partes.forEach((parte, partIndex) => {
                        const xPos = partIndex === 0 ? 15 : 15; // Primeira linha indentada
                        doc.text(parte, xPos, yOffset);
                        yOffset += 5; // Mais espaço entre linhas de item
                    });
                    
                    yOffset += 2; // Espaço extra após cada item
                } else {
                    // Texto normal com melhor espaçamento
                    const partes = doc.splitTextToSize(linhaTratada, maxWidth);
                    
                    partes.forEach((parte) => {
                        doc.text(parte, 10, yOffset);
                        yOffset += 5; // Mais espaço entre linhas
                    });
                    
                    yOffset += 3; // Espaço extra após cada parágrafo
                }
            });
        }
    } catch (error) {
        console.error('Erro ao processar recomendação:', error);
        doc.text('Erro ao processar recomendação', 10, yOffset);
        yOffset += 20;
    }

    // Salva o PDF
    doc.save("CLINFARMA_Calc_Resultado.pdf");
}
