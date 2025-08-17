import jsPDF from 'jspdf';
import brasaors from '../../assets/img/BrasaoRS.png';

function reduzirOpacidade(imgSrc, alpha, callback) {
    const img = new Image();
    img.src = imgSrc;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.globalAlpha = alpha;
        ctx.drawImage(img, 0, 0);

        callback(canvas.toDataURL("image/png"));
    };
}


export function downloadPDF(score, result, selectedOptions, nomePaciente, crf, nomeFarmaceutico, data) {
    // Primeiro gera a versão transparente do fundo
    reduzirOpacidade(brasaors, 0.20, (imgBase64) => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        let yOffset = 10;

        // Função para adicionar fundo em cada página
        const addBackground = () => {
            doc.addImage(imgBase64, "PNG", 20, 40, pageWidth - 40, pageHeight - 80);
        };

        // adiciona na primeira página
        addBackground();

        // === Cabeçalho ===
        // Nome do score:
        doc.text(score.label, pageWidth / 2, 15, { align: 'center' });

        const textoCabecalho = `\n\nResultado: ${result.result}\nPaciente: ${nomePaciente} \nCRF: ${crf} \nFarmacêutico: ${nomeFarmaceutico}\nData: ${data}`;
        const cabecalho = doc.splitTextToSize(textoCabecalho, 180);
        cabecalho.forEach((linha) => {
            doc.text(linha, 10, yOffset);
            yOffset += 8;
        });

        doc.setDrawColor(0, 102, 51);
        doc.setLineWidth(0.5);
        doc.line(10, yOffset, pageWidth - 10, yOffset);

        yOffset += 6;
        doc.text("Respostas do Questionário:", 10, yOffset);
        yOffset += 10;

        // === Perguntas ===
        score.questions.forEach((question, index) => {
            if (yOffset > 270) {
                doc.addPage();
                addBackground();
                yOffset = 10;
            }

            const questionNumber = formatQuestionNumber(index, score);
            const resposta = selectedOptions[index] || "Não respondida";

            const textoPergunta = `${questionNumber} ${question.text}`;
            const textoResposta = `Resposta: ${resposta}`;

            const perguntaPartes = doc.splitTextToSize(textoPergunta, 180);
            perguntaPartes.forEach((linha) => {
                doc.text(linha, 10, yOffset);
                yOffset += 6;
            });

            const respostaPartes = doc.splitTextToSize(textoResposta, 180);
            respostaPartes.forEach((linha) => {
                doc.text(linha, 10, yOffset);
                yOffset += 6;
            });

            yOffset += 4;
        });

        // === Recomendação ===
        yOffset += 4;
        const recomendacoes = doc.splitTextToSize(`Recomendação: ${result.feedback}`, 180);
        recomendacoes.forEach((linha) => {
            doc.text(linha, 10, yOffset);
            yOffset += 6;
        });

        doc.save("feedback.pdf");
    });

};


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

const formatQuestionNumber = (index, score) => {
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
        return `${armsQuestions[index].prefix}${index + 1}.`;
    }

    return `${index + 1}`;
};
