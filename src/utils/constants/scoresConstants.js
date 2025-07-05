import { faFaceFrown, faFaceSmile, faFaceMeh } from "@fortawesome/free-regular-svg-icons";

export const scores = [
    {
        key: 'arms',
        label: 'Escala de Adesão aos Medicamentos e ao Reabastecimento dos Medicamentos (ARMS)',
        description: 'Escala de avaliação da adesão aos medicamentos que pode ser aplicada em pacientes com qualquer nível de letramento.',
        targetAudience: 'Pacientes com condições crônicas que exigem uso contínuo de medicamento.',
        hintText: 'Pontuação próxima à 48 indica pior adesão aos medicamentos.',
        durationText: '5 à 10 minutos',
        optionsType: 'frequência',
        options: [
            {
                label: 'Nunca',
                value: 1
            },
            {
                label: 'Às vezes',
                value: 2
            },
            {
                label: 'Quase sempre',
                value: 3
            },
            {
                label: 'Sempre',
                value: 4
            },
        ],
        questions: [
            {
                text: 'Esquece de tomar seus medicamentos?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Decide nao tomar seus medicamentos naquele dia?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Deixa de tomar seu medicamento porque vai a uma consulta médica?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Deixa de tomar seu medicamento quando se sente melhor?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Deixa de tomar seu medicamento quando se sente mal ou doente?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Deixa de tomar seu medicamento quando está mais descuidado consigo mesmo?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Muda a dose do seu medicamento por alguma necessidade?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Esquece de tomar o medicamento quando tem que tomar mais de uma vez/dia?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Esquece de ir à farmácia pegar seus medicamentos?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Deixa acabar seus medicamentos?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Deixa de adquirir seu medicamento por causa do preço muito caro?',
                options: [
                    {
                        label: 'Nunca',
                        value: 1
                    },
                    {
                        label: 'Às vezes',
                        value: 2
                    },
                    {
                        label: 'Quase sempre',
                        value: 3
                    },
                    {
                        label: 'Sempre',
                        value: 4
                    },
                ]
            },
            {
                text: 'Se antecipa e busca seu medicamento na farmácia antes mesmo de acabar seu medicamento em casa?',
                options: [
                    {
                        label: 'Nunca',
                        value: 4
                    },
                    {
                        label: 'Às vezes',
                        value: 3
                    },
                    {
                        label: 'Quase sempre',
                        value: 2
                    },
                    {
                        label: 'Sempre',
                        value: 1
                    },
                ]
            },
        ],
        calculateFunction: (finalValue = []) => {
            //soma das perguntas, varia de 12 a 48
            const result = finalValue.reduce((acc, value) => acc + value, 0);
            let feedback;
            if (result <= 12) {
                feedback = `Esse paciente demonstra uma BOA adesão ao tratamento farmacológico. 
            É importante fortalecer com ele os resultados positivos dessa prática e incentivá-lo a manter os cuidados relacionados à administração e reposição dos medicamentos.`;
            } else {
                feedback = `Esse paciente demonstra uma BAIXA adesão ao tratamento farmacológico. 
            A baixa adesão ao tratamento pode estar associada a dificuldades específicas que precisam ser investigadas e abordadas. 
            Recomendamos avaliar os itens da escala para identificar se o problema está na administração ou reposição do medicamento.
            
            Em caso de dificuldades com a administração do medicamento:
            - Verifique se o paciente compreende os horários e formas de administração;
            - Avaliar se o esquema terapêutico é compatível com a rotina do paciente e, se possível, simplifique-o;
            - Oriente o paciente sobre como minimizar e manejar possíveis efeitos colaterais;
            - Disponibilizar materiais educativos.
            
            Em caso de dificuldades com a reposição do medicamento:
            - Oriente o paciente sobre as melhores formas de adquirir os medicamentos, seja em farmácia comunitária ou comercial;
            - Explique como organizar a reposição, alterando estratégias como renovação antecipada de receitas ou lembretes para evitar esquecimentos;
            - Caso existam programas de apoio ao paciente ou benefícios disponíveis, informe como ele pode acessá-los.`;
            }
            return { result, feedback };
        },
        getEmoji: value => {
            switch (true) {
                case value <= 12: {
                    return { icon: faFaceSmile, color: '#389e0d' }
                }
                case (value > 12 && value < 30): {
                    return { icon: faFaceMeh, color: '#ffd43b' }
                }
                case value >= 30: {
                    return { icon: faFaceFrown, color: '#ff4d4f' }
                }
            }
        },
    },
    {
        key: 'bmq',
        label: 'Questionario breve sobre medicação (BMQ)',
        description: 'Avaliar a adesão aos medicamentos e identificar barreiras relacionadas ao uso relacionadas a crenças, regime e recordação.',
        targetAudience: 'Pacientes que estão em uso de medicamentos de forma contínua, especialmente para condições crônicas',
        hintText: 'Quanto maior o escore, mais barreiras relacionadas ao uso de medicamentos.',
        durationText: '5 à 10 minutos',
        optionsType: 'sim ou não',
        //acho que as options estão relacionadas com o bug de marcar varios radio buttons sozinho em outros scores
        options: [
            {
                label: 'Sim',
                value: 1
            },
            {
                label: 'Não',
                value: 0
            }
        ],
        questions: [
            {
                text: 'O R falhou em listar (espontaneamente) os medicamentos prescritos no relato inicial?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R interrompeu a terapia devido ao atraso na dispensaçao da medicação ou outro motivo?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R relatou alguma falha de dias ou de doses?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R reduziu ou omitiu doses de algum medicamento?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R tomou alguma dose extra ou medicação a mais do que o prescrito?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R respondeu que "não sabia" a alguma das perguntas?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            // Perguntas relacionadas a crenças:
            {
                text: 'O R relatou "não funciona bem" ou "não sei" na resposta 1g?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R nomeou as medicações que o incomodam?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            // Perguntas relacionadas a recordação:
            {
                text: 'O R recebe um esquema de múltiplas doses de medicamentos (2 ou mais vezes/dia)?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            },
            {
                text: 'O R "muita dificuldade" ou "alguma dificuldade" em responder a 3c?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    }
                ]
            }
        ],
        calculateFunction: (finalValue = []) => {
            const regime = finalValue.slice(0, 7);
            const crencas = finalValue.slice(7, 9);
            const recordacao = finalValue.slice(9, 11);

            const countSim = (arr) => {
                return arr.reduce((acc, value) => {
                    return acc + (value === 1 ? 1 : 0);
                }, 0);
            }

            const regimeScore = countSim(regime);
            const crencasScore = countSim(crencas);
            const recordacaoScore = countSim(recordacao);

            const result = Math.max(regimeScore, crencasScore, recordacaoScore);

            let feedback;
            if (result === 0) {
                feedback = `Alta adesão
                O resultado indica que o paciente apresenta uma alta adesão ao tratamento. 
Reforce com o paciente que uma boa adesão  ao tratamento é benéfico para a sua qualidade de vida e discuta os benefícios a longo prazo da continuidade do cuidado;
Reforce as instruções sobre o uso correto dos medicamentos, mesmo na ausência de sintomas;
Identifique e antecipe possíveis desafios que possam surgir, garantindo que o paciente tenha suporte para continuar o tratamento específico.
`;
            } else if (result === 1) {
                feedback = `Provável alta adesão
                O resultado indica uma probabilidade de alta adesão, mas com possibilidade de pequenas dificuldades pontuais.
Explore com o paciente possíveis dificuldades isoladas, como esquecimento ou dúvidas sobre o uso correto do medicamento;
Explique a importância de seguir o esquema terapêutico corretamente e como isso impacta nos resultados esperados;
Sugira estratégias para melhorar a adesão, como uso de lembretes ou organização do horário dos medicamentos
`;
            } else if (result === 2) {
                feedback = `Provável baixa adesão
                O resultado indica uma probabilidade de baixa adesão, demonstrando que o paciente pode enfrentar dificuldades relevantes no uso do medicamento.
Investigue os motivos da baixa adesão, como efeitos adversos, complexidade do regime terapêutico, questões financeiras ou falta de compreensão sobre a importância do tratamento;
Reforce o impacto positivo da adesão ao tratamento na prevenção de complicações e na melhoria da qualidade de vida;
Caso possível, discuta com o (s) prescritor (es)  alternativas que possam simplificar e facilitar a adesão, como substituição de medicamentos ou redução na frequência de doses, caso seja possível;
Ofereça suporte adicional, como material educativo e oferta de serviços farmacêuticos clínicos  periódicos para acompanhamento do paciente.
`;
            }
            else {
                feedback = `Baixa adesão
                O resultado indica baixa adesão, o que pode comprometer significativamente os resultados terapêuticos e aumentar o risco de complicações oriundas da não administração dos medicamentos;
Investigue minuciosamente os fatores que afetam a baixa adesão, considerando aspectos sociais, emocionais e econômicos;
Desenvolva um plano de cuidado individualizado para abordar as dificuldades identificadas, como revisões frequentes do esquema terapêutico e estratégias para fortalecer a motivação do paciente;
Estabeleça uma comunicação aberta e focada em construir confiança, garantindo que o paciente se sinta apoiado no processo de cuidado;
Trabalhe em conjunto com médicos, enfermeiros e assistentes sociais para oferecer um cuidado integrado e focado na adesão ao tratamento.
`;
            }

            return { result, feedback };

        },
        getEmoji: value => {
            switch (true) {
                case value <= 0: {
                    return { icon: faFaceSmile, color: '#389e0d' }
                }
                case (value === 1): {
                    return { icon: faFaceMeh, color: '#ffd43b' }
                }
                case value === 2: {
                    return { icon: faFaceFrown, color: '#ff4d4f' }
                }
                case value >= 3: {
                    return { icon: faFaceFrown, color: '#ff4d4f' }
                }
            }
        },
    },
    {
        key: 'act',
        label: 'Teste de controle da Asma (ACT)',
        description: 'Avaliar o controle da asma nas últimas 4 semanas.',
        targetAudience: 'Pacientes adultos diagnosticados com asma.',
        hintText: 'Quanto maior o escore, mais controlada é a asma.',
        durationText: '3 à 7 minutos',
        optionsType: 'frequência',
        options: [
            {
                label: 'De jeito nenhum'
            },
            {
                label: 'Apenas algumas vezes'
            },
            {
                label: 'Algumas vezes'
            },
            {
                label: 'Muitas vezes'
            },
            {
                label: 'Mais que uma vez por dia'
            },
        ],
        questions: [
            {
                text: 'A asma prejudicou suas atividades no trabalho, na escola ou em casa?',
                options: [
                    {
                        label: 'Nenhuma vez',
                        value: 1
                    },
                    {
                        label: 'Poucas vezes',
                        value: 2
                    },
                    {
                        label: 'Algumas vezes',
                        value: 3
                    },
                    {
                        label: 'Maioria das vezes',
                        value: 4
                    },
                    {
                        label: 'Todo o tempo',
                        value: 5
                    }
                ]
            },
            {
                text: 'Como está o controle da sua asma?',
                options: [
                    {
                        label: 'Totalmente descontrolada',
                        value: 1
                    },
                    {
                        label: 'Pobremente controlada',
                        value: 2
                    },
                    {
                        label: 'Um pouco controlada',
                        value: 3
                    },
                    {
                        label: 'Bem controlada',
                        value: 4
                    },
                    {
                        label: 'Completamente controlada',
                        value: 5
                    }
                ]
            },
            {
                text: 'Quantas vezes você teve falta de ar?',
                options: [
                    {
                        label: 'De jeito nenhum',
                        value: 1
                    },
                    {
                        label: 'Uma ou duas vezes por semana',
                        value: 2
                    },
                    {
                        label: 'Três a seis vezes por semana',
                        value: 3
                    },
                    {
                        label: 'Uma vez ao dia',
                        value: 4
                    },
                    {
                        label: 'Mais que uma vez ao dia',
                        value: 5
                    }
                ]
            },
            {
                text: 'A asma acordou você à noite ou mais cedo que de costume?',
                options: [
                    {
                        label: 'De jeito nenhum',
                        value: 1
                    },
                    {
                        label: 'Uma ou duas vezes',
                        value: 2
                    },
                    {
                        label: 'Uma vez por semana',
                        value: 3
                    },
                    {
                        label: 'Duas ou três noites por semana',
                        value: 4
                    },
                    {
                        label: 'Quatro ou mais noites por semana',
                        value: 5
                    }
                ]
            },
            {
                text: 'Quantas vezes você usou o remédio por inalação para alívio?',
                options: [
                    {
                        label: 'De jeito nenhum',
                        value: 1
                    },
                    {
                        label: 'Uma vez por semana ou menos',
                        value: 2
                    },
                    {
                        label: 'Poucas vezes por semana',
                        value: 3
                    },
                    {
                        label: 'Uma ou duas vezes por dia',
                        value: 4
                    },
                    {
                        label: 'Três ou mais vezes por dia',
                        value: 5
                    }
                ]
            }
        ],
        calculateFunction: (finalValue = []) => {
            //soma da resposta de todas perguntas, pode variar de 5 à 25
            const result = finalValue.reduce((acc, value) => acc + value, 0);

            let feedback;
            if (result < 15) {
                feedback = `Asma Não Controlada. 
            O resultado indica que a doença não está controlada, o que pode aumentar o risco de crises graves e complicações. 
                - Verificar e orientar a forma de uso dos medicamentos diferenciando os medicamentos de uso contínuo daqueles usados para alívio dos sintomas, garantindo que o paciente compreenda a forma e o momento adequado de utilizá-los;
                - Avalie se a adesão está sendo realizada corretamente conforme o plano terapêutico, e se necessário, ofereça orientações sobre como melhorar a adesão;
                - Oriente sobre medidas não farmacológicas, como atividades física;
                - Conversar sobre a importância do tratamento e resultados terapêuticos esperados.`;
            } else if (result >= 15 && result <= 19) {
                feedback = `Asma Parcialmente Controlada. 
            O resultado indica que a doença não está bem controlada.  
                - Verificar e orientar a forma de uso dos medicamentos diferenciando os medicamentos de uso contínuo daqueles usados para alívio dos sintomas;
                - Avalie se a adesão está sendo mantida e ofereça dicas para facilitar a rotina de medicação, como o uso de lembretes ou ajustes na forma de administração;
                - Verificar e orientar medidas não farmacológicas, como atividades físicas adequadas;
                - Conversar sobre a importância do tratamento e resultados terapêuticos esperados.`;
            } else {
                feedback = `Asma Controlada.
            O resultado indica que a doença está bem controlada. 
                -Reforçar com o paciente os resultados positivos e estimular a manter os cuidados relacionados às medidas não farmacológicas e a adesão ao tratamento.`;
            }
            return { result, feedback };
        },
        getEmoji: value => {
            switch (true) {
                case value >= 21: {
                    return { icon: faFaceSmile, color: '#389e0d' }
                }
                case (value > 15 && value < 19): {
                    return { icon: faFaceMeh, color: '#ffd43b' }
                }
                case value < 15: {
                    return { icon: faFaceFrown, color: '#ff4d4f' }
                }
            }
        },
    },
    {
        key: 'dpoc',
        label: 'Teste de Avaliação da Doença Pulmonar Obstrutiva Crônica (DPOC)',
        description: 'Avaliar o impacto da DPOC na vida do paciente e monitorar a progressão da doença ao longo do tempo.',
        targetAudience: 'Pacientes diagnosticados com Doença Pulmonar Obstrutiva Crônica.',
        hintText: 'Quanto maior o escore, mais impacto a DPOC causa na qualidade de vida do paciente.',
        durationText: '3 à 7 minutos',
        optionsType: 'intensidade',
        options: [
            {
                label: '0',
                value: 0
            },
            {
                label: '1',
                value: 1
            },
            {
                label: '2',
                value: 2
            },
            {
                label: '3',
                value: 3
            },
            {
                label: '4',
                value: 4
            },
            {
                label: '5',
                value: 5
            }
        ],
        questions: [
            {
                text: 'Você tem tosse com frequência?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'O seu peito está cheio de catarro (secreção)?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'Você sente uma grande pressão no peito?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'Você sente bastante falta de ar quando sobe uma ladeira ou um andar de escadas?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'Você se sente limitado nas suas atividades em casa?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'Você NÃO se sente confiante para sair de casa por causa da sua doença pulmonar?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'Você NÃO dorme profundamente devido à sua doença pulmonar?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            },
            {
                text: 'Você NÃO tem nenhuma energia (disposição)?',
                options: [
                    {
                        label: '0',
                        value: 0
                    },
                    {
                        label: '1',
                        value: 1
                    },
                    {
                        label: '2',
                        value: 2
                    },
                    {
                        label: '3',
                        value: 3
                    },
                    {
                        label: '4',
                        value: 4
                    },
                    {
                        label: '5',
                        value: 5
                    }
                ]
            }
        ],
        calculateFunction: (finalValue = []) => {
            //soma da resposta de todas perguntas, pode variar de 0 à 40
            const result = finalValue.reduce((acc, value) => acc + value, 0);

            let feedback;
            if (result <= 9) {
                feedback = `Sintomas Leves. 
            Pacientes com pontuação entre 0 e 9 apresentam níveis de sintomas e impacto mínimo na qualidade de vida.
                - Reforce a importância de manter a adesão ao tratamento prescrito para prevenir a progressão da doença;
                - Estimule hábitos saudáveis, como a prática de atividades físicas específicas e a cessação do tabagismo, se aplicável;
                - Incentivo ao acompanhamento periódico com a equipe de saúde.`;
            } else if (result >= 10 && result <= 19) {
                feedback = `Sintomas Moderados. 
            Pacientes com essa classificação apresentam sintomas moderados e um impacto moderado na qualidade de vida.
                - Reforce a importância da adesão ao tratamento, especialmente o uso correto dos dispositivos inalatórios;
                - Recomendado, se necessário, a participação em programas de reabilitação pulmonar;
                - Oriente sobre os sinais de alerta que indicam a necessidade de procurar atendimento médico.`;
            } else if (result >= 20 && result <= 29) {
                feedback = `Sintomas Graves. 
            Pacientes com classificação nesta faixa apresentam sintomas graves e significativos na qualidade de vida.
                - Realize uma revisão detalhada do tratamento para verificar a adequação do plano terapêutico;
                - Eduque o paciente sobre o manejo de sintomas graves e como utilizar medicamentos de resgate;
                - Reforce a importância de evitar fatores agravantes e manter um acompanhamento médico frequente;
                - Verifique quando foi a última consulta e recomende nova avaliação médica.`;
            }
            else {
                feedback = `Sintomas Muito Graves. 
            Pacientes com pontuação entre 30 e 40 apresentam sintomas muito graves e um impacto muito significativo na qualidade de vida.
                - Trabalhe em conjunto com uma equipe multidisciplinar para um manejo integral da DPOC;
                - Oriente o paciente e cuidadores sobre os cuidados do tratamento e como utilizar os medicamentos prescritos;
                - Oferece suporte psicológico ou emocional, considerando o impacto na qualidade de vida;
                - Reforce a importância do acompanhamento rigoroso e possível ajuste terapêutico em curto prazo.`;
            }
            return { result, feedback };
        },
        getEmoji: value => {
            switch (true) {
                case value <= 9: {
                    return { icon: faFaceSmile, color: '#389e0d' }
                }
                case (value >= 10 && value < 30): {
                    return { icon: faFaceMeh, color: '#ffd43b' }
                }
                case value >= 30: {
                    return { icon: faFaceFrown, color: '#ff4d4f' }
                }
            }
        },
    },
    {
        key: 'nrnj',
        label: 'Algoritmo de Naranjo',
        description: 'Determinar a causalidade de uma reação adversa a medicamentos.',
        targetAudience: 'Profissionais de saúde, incluindo médicos, farmacêuticos e pesquisadores, buscam identificar a relação causal entre um medicamento e uma reação adversa.',
        hintText: 'Quanto maior o escore, mais definida é a relação entre a reação adversa e o medicamento.',
        durationText: '3 à 7 minutos',
        optionsType: 'intensidade',
        options: [
            {
                label: 'Sim',
            },
            {
                label: 'Não',
            },
            {
                label: 'Não sei',
            }
        ],
        questions: [
            {
                text: 'Existem notificações conclusivas sobre esta reação?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A reação apareceu após a administração do fármaco?',
                options: [
                    {
                        label: 'Sim',
                        value: 2
                    },
                    {
                        label: 'Não',
                        value: -1
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A reação melhorou quando o fármaco foi suspenso?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A reação reapareceu quando da sua readministração?',
                options: [
                    {
                        label: 'Sim',
                        value: 2
                    },
                    {
                        label: 'Não',
                        value: -1
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'Existem causas alterantivas (até mesmo outro fármaco)?',
                options: [
                    {
                        label: 'Sim',
                        value: -1
                    },
                    {
                        label: 'Não',
                        value: 2
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A reação reaparece com a introdução de um placebo?',
                options: [
                    {
                        label: 'Sim',
                        value: -1
                    },
                    {
                        label: 'Não',
                        value: 1
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A concentração plasmática está em nível tóxico?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A reação aumentou com dose maior ou reduziu com dose menor?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'O paciente já experimentou semelhante reação anteriormente com medicamentos de mesmo fármaco?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            },
            {
                text: 'A reação foi confirmada por qualquer evidência objetiva?',
                options: [
                    {
                        label: 'Sim',
                        value: 1
                    },
                    {
                        label: 'Não',
                        value: 0
                    },
                    {
                        label: 'Não sei',
                        value: 0
                    }
                ]
            }
        ],
        calculateFunction: (finalValue = []) => {
            //soma da resposta de todas perguntas, pode variar de -4 à 13
            const result = finalValue.reduce((acc, value) => acc + value, 0);

            let feedback;
            if (result >= 9) {
                feedback = `Reação Definida
                A relação entre o medicamento e a reação adversa é bem definida e muito provável.
                Sugestões de intervenção:
                    - Documente a reação adversa no prontuário do paciente e faça a notificação ao sistema de farmacovigilância;
                    - Considere descontinuar o medicamento ou substituí-lo por uma alternativa terapêutica, conforme a gravidade da reação e orientação médica;
                    - Informe ao paciente sobre os riscos relacionados à medicação e os cuidados necessários;
                    - Acompanhe de perto o paciente para monitorar possíveis recorrências`;
            } else if (result >= 5 && result <= 8) {
                feedback = `Reação Provável
                A relação entre o medicamento e a reação adversa é provável.
                Sugestões de intervenção:
                    - Reforce a importância de monitorar os sintomas e reações do paciente;
                    - Avalie a possibilidade de reduzir a dose, ajustar o regime de administração ou trocar o medicamento, caso necessário;
                    - Ofereça orientações claras sobre os sinais de recorrência e o que fazer em caso de novos sintomas;
                    - Considere um acompanhamento mais frequente do paciente para garantir que a reação não se agrave.`;
            } else if (result >= 1 && result <= 4) {
                feedback = `Reação Possível
                A relação entre o medicamento e a reação adversa é possível, mas outras causas podem estar envolvidas.
                Sugestões de intervenção:
                    - Avalie o histórico do paciente e considere outras possíveis causas para a reação observada;
                    - Monitore de perto a evolução dos sintomas, realizando exames adicionais, se necessário, para investigar outras condições;
                    - Se a reação persistir ou piorar, considere ajustes no tratamento ou encaminhamento para uma avaliação médica mais aprofundada;
                    - Explique ao paciente que a relação com o medicamento não é totalmente definida e reforce a importância de continuar o acompanhamento.`;
            }
            else {
                feedback = `Reação Duvidosa
                A relação entre o medicamento e a reação adversa é duvidosa, ou seja, é improvável que o medicamento tenha causado a reação.
                Sugestões de intervenção:
                    - A reação provavelmente não está relacionada ao medicamento, então o tratamento pode ser mantido conforme prescrito;
                    - Explique ao paciente que, com base na avaliação, a medicação não parece ser a causa da reação observada;
                    - Se os sintomas persistirem, considere outras possíveis causas e realize a investigação necessária;
                    - Mantenha o acompanhamento do paciente e forneça orientações sobre cuidados gerais.`;
            }
            return { result, feedback };
        },
        getEmoji: value => {
            switch (true) {
                case value <= 0: {
                    return { icon: faFaceSmile, color: '#389e0d' }
                }
                case (value >= 1 && value < 9): {
                    return { icon: faFaceMeh, color: '#ffd43b' }
                }
                case value >= 9: {
                    return { icon: faFaceFrown, color: '#ff4d4f' }
                }
            }
        },
    }
];