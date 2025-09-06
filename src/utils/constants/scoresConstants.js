import { text } from "@fortawesome/fontawesome-svg-core";
import { faFaceFrown, faFaceSmile, faFaceMeh } from "@fortawesome/free-regular-svg-icons";

export const scores = [
    {
        key: 'arms',
        //
        label: 'Escala de Adesão e reposição dos medicamentos (ARMS)',
        //vai aparecer como objetivo
        description: 'Avaliar a adesão aos medicamentos considerando quanto o paciente segue o que foi prescrito e regularidade de obtenção dos medicamentos.',
        //público alvo
        targetAudience: 'Pacientes com condições crônicas que exigem uso contínuo de medicamento. A escala pode ser aplicada em pacientes com qualquer nível de letramento.',
        //Aparece na tela de resultados na primeira frase em negrito no topo
        hintText: 'Pontuação próxima à 48 indica pior adesão aos medicamentos.',
        generalInformation: `A escala ARMS consiste em 12 itens subdivididos em:
        Administração dos  Medicamentos (Taken - T)(7 itens): Avalia quanto o paciente segue o regime prescrito de medicação.
        Reposição dos medicamentos (Recall - R) (5 itens): Avalia a  regularidade com que o paciente obtém os medicamentos prescritos.`,
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
                feedback = `Esse paciente demonstra uma boa adesão ao tratamento farmacológico. 
            Fortaleça com ele os resultados positivos de manter uma boa adesão ao tratamento;
            Incentive o paciente a manter os cuidados relacionados à administração e reposição dos medicamentos.`;
            } else {
                feedback = `Esse paciente demonstra uma baixa adesão ao tratamento farmacológico. 
                A baixa adesão ao tratamento pode estar associada a dificuldades específicas que precisam ser investigadas e abordadas. 
                Recomendamos avaliar os itens da escala para identificar se o problema está na administração ou reposição do medicamento.
                Em caso de dificuldades com a administração do medicamento.
                Verifique se o paciente compreende os horários e formas de administração;
                Avalie se o esquema terapêutico é compatível com a rotina do paciente e, se possível, modifique o esquema e/ou discuta com o(a) prescritor(a) para simplificá-lo;
                Oriente o paciente sobre como minimizar e manejar possíveis efeitos adversos, que podem estar prejudicando a adesão.
                Investigue causas intencionais ou não intencionais que podem estar prejudicando a adesão;
                Elabore e disponibilize materiais educativos.
                Em caso de dificuldades com a reposição do medicamento:
                Oriente o paciente sobre como acessar os medicamentos necessários, seja em comercial ou farmácias do SUS, explicando os fluxos para solicitação dos medicamentos;
                Explique como organizar a reposição, alterando estratégias como renovação antecipada de receitas ou lembretes para evitar esquecimentos;
                Caso existam programas de apoio ao paciente ou benefícios disponíveis, informe como ele pode acessá-los.
`;
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
        key: 'lhp',
        label: 'Método de avaliação da causalidade da Lesão Hepática Induzida por Medicamentos (RUCAM)',
        description: 'Identificar a relação de causalidade entre o uso de um medicamento e a ocorrência de lesão hepática, classificando a probabilidade de que o medicamento tenha sido a causa da lesão.',
        targetAudience: 'Pacientes com suspeita de lesão hepática induzida por medicamento, com valores de ALT três vezes superiores ao valor normal do paciente em exames anteriores.',
        hintText: 'Interpretação: ≥9 Relação altamente provável, 6–8 Relação provável, 3–5 Relação possível, 1–2 Relação improvável, ≤0 Relação excluída.',
        durationText: '20 à 40 minutos',
        optionsType: '',
        options: [
            {
                label: 'Redução ≥ 50% da ALP dentro de 180 dias',
                value: 1
            },
            {
                label: 'Redução < 50% da ALP dentro de 180 dias',
                value: 0
            }
        ],
        questions: [
            {
                text: 'Tempo entre a administração do medicamento ou fitoterápico e o aparecimento dos sinais e sintomas',
                //cada objeto em options possui label e value
                options: [
                    {
                        label: '5 a 90 dias (reexposição: 1 a 15 dias)',
                        value: 2
                    },
                    {
                        label: '< 5 ou > 90 dias (reexposição: > 15 dias)',
                        value: 'q1_2'
                    },
                    {
                        label: 'Tempo para início dos sinais e sintomas após a cessação do medicamento ou fitoterápico < 15 dias (exceção: metabolizadores lentos > 15 dias)',
                        value: 'q1_3'
                    }
                ],
            },
            {
                text: 'Curso da ALT (alanina aminotransferase) após a cessação do medicamento ou fitoterápico. Diferença percentual entre o pico de ALT e o limite superior da normalidade (LSN).',
                options: [
                    { label: 'Redução > 50% em 8 dias', value: 3 },
                    { label: 'Redução > 50% em 30 dias', value: 2 },
                    { label: 'Sem informação ou medicamento ou fitoterápico segue em uso.', value: 0 },
                    { label: 'Redução > 50% após 30 dias', value: 'q2_4' },
                    { label: 'Redução < 50% após 30 dias ou aumento recorrente da ALT', value: -2 },
                ],
            },
            {
                text: 'Fator de risco: O paciente consome álcool?',
                options: [
                    { label: 'Uso de álcool (consumo de doses/dia: >2 para mulheres, >3 para homens)', value: 1 },
                    { label: 'Uso de álcool (consumo de doses/dia: <2 para mulheres, <3 para homens)', value: 0 }
                ],
            },
            {
                text: 'Fator de risco: Qual a idade do paciente?',
                options: [
                    { label: 'Idade >= 55 anos', value: 1 },
                    { label: 'Idade < 55 anos', value: 0 },
                ],
            },
            {
                text: 'Uso concomitante de outros medicamentos ou fitoterápicos',
                options: [
                    { label: 'Não utiliza medicamento ou fitoterápico concomitantemente', value: 'q6_1' },
                    { label: 'Medicamento ou fitoterápico em uso concomitante, porém com tempo para início dos sinais e sintomas incompatível com a lesão hepática apresentada.', value: 'q6_2' },
                    { label: 'Medicamento ou fitoterápico em uso concomitante, com tempo para início dos sinais e sintomas compatível com a lesão hepática apresentada.', value: -1 },
                    { label: 'Medicamento ou fitoterápico em uso concomitante, com conhecido efeito hepatotóxico e com tempo para início dos sinais e sintomas compatível com a lesão hepática apresentada (se afirmativo, excluir alternativa anterior);', value: -2 },
                    { label: 'Medicamento ou fitoterápico em uso concomitante, com evidencia de “causalidade” (reexposição positiva ao medicamento ou fitoterápico neste caso, e alteração das transaminases).', value: -3 }
                ],
            },
            {
                text: 'Causes alternativas foram consideradas para a lesão hepática?',
                type: 'rucam-alternative-causes',
                groupI: [
                    'HAV (Hepatite viral tipo A)',
                    'HBV (Hepatite viral tipo B)',
                    'HCV (Hepatite viral tipo C)',
                    'HEV (Hepatite viral tipo E)',
                    'Alteração em ultrassonografia das vias hepatobiliares; tomografia computadorizada/ressonância magnética coleangiografia',
                    'Alcoolismo',
                    'História recente de hipotensão aguda (principalmente na doença cardíaca subjacente)'
                ],
                groupII: [
                    'Complicações de doenças subjacentes como sepse, doença metastática maligna, hepatite autoimune, hepatite crônica pelo vírus C ou B, colangite biliar primária, colangite esclerosante, doenças genéticas do fígado',
                    'Infecção por CMV (Citomegalovírus)',
                    'Infecção por EBV (Vírus Epstein-Barr)',
                    'Infecção por HSV (Vírus Herpes Simples)',
                    'Infecção por VZV (Varicella Zoster Vírus)'
                ],
                options: [
                    { label: 'Causa alternativa altamente provavel', value: -3 },
                ],
            },
            {
                text: 'Hepatotoxicidade previamente conhecida para o medicamento ou fitoterápico suspeito',
                options: [
                    { label: 'É uma reação prevista em bula/rótulo para este medicamento ou fitoterápico', value: 2 },
                    { label: 'É uma reação publicada para este medicamento ou fitoterápico, porém não consta na bula/rótulo', value: 1 },
                    { label: 'É uma reação desconhecida para este medicamento ou fitoterápico.', value: 0 },
                ],
            },
            {
                text: 'Resposta a reexposição ao medicamento ou fitoterápico suspeito',
                options: [
                    { label: 'Duplicação de níveis de ALT, com o medicamento ou fitoterápico isolado, posto que, anteriormente à reexposição, os valores de ALT estavam abaixo de 5xLSN.', value: 3 },
                    { label: 'Duplicação de níveis de ALT, com o medicamento ou fitoterápico administrado nas mesmas condições da primeira reação', value: 1 },
                    { label: 'Aumento da ALT, porém ainda abaixo do LSN nas mesmas condições da primeira administração', value: -2 },
                    { label: 'Outras situações', value: 0 },
                ],
            }
        ],
        calculateFunction: (finalValue = []) => {
            const auxMap = {
                q2_4: 0,

                q1_2: 1, q1_3: 1,
                q7_1: 0, q7_2: 0,

                q6_1: 0, q6_2: 0,
            };

            finalValue = finalValue.map(value => auxMap[value] !== undefined ? auxMap[value] : value);

            const normalValues = finalValue.filter(v => typeof v === 'number');
            const altCause = finalValue.find(v => v && typeof v === 'object' && v.type === 'rucam-alternative-causes');

            let result = normalValues.reduce((acc, val) => acc + val, 0);

            let altScore = 0;

            if (altCause?.highlyProbable) {
                altScore = -3;
            } else {
                const groupINegatives = altCause?.groupI?.filter(c => c.negative).length || 0;
                const groupIINegatives = altCause?.groupII?.filter(c => c.negative).length || 0;
                const totalNegatives = groupINegatives + groupIINegatives;

                if (totalNegatives === 12) {
                    altScore = 2;
                } else if (groupINegatives === 7) {
                    altScore = 1;
                } else if (groupINegatives >= 5) {
                    altScore = 0;
                } else if (groupINegatives < 5) {
                    altScore = -2;
                }
            }

            result += altScore;

            let feedback = '';

            if (result <= 0) {
                feedback = `Relação excluída. 
                A relação entre o medicamento e a lesão hepática é excluída.
Exclua o medicamento como causa de lesão hepática e foque na investigação de outras etiologias, como infecções, doenças hepáticas prévias ou consumo de substância hepatotóxica;
Reforce a continuidade do tratamento com o medicamento, caso ele seja essencial para a terapia do paciente;
Explique ao paciente que, com base nesta avaliação, utilizando este instrumento, o medicamento não está relacionado à lesão hepática;
Monitore o paciente regularmente para garantir que outras causas sejam especificadas e tratadas.`;
            } else if (result >= 1 && result <= 2) {
                feedback = `Relação improvável. 
                A relação entre o medicamento e a lesão hepática é improvável.
Considere outras causas e investigue outros fatores que possam estar associados à lesão hepática, como doenças subjacentes, infecções ou consumo de substâncias tóxicas;
Caso não haja contra indicação, o medicamento pode ser mantido, mas com monitoramento regular da função hepática;
Informe o paciente sobre a baixa probabilidade de relação com o medicamento e reforce a importância de continuar com as consultas e exames periódicos;
Monitore o paciente regularmente para garantir que outras causas sejam especificadas e tratadas.`;
            } else if (result >= 3 && result <= 5) {
                feedback = `Relação possível. 
                A relação entre o medicamento e a lesão hepática é possível.
Aprofunde a investigação, avaliando o histórico clínico do paciente, buscando identificar outros fatores possíveis que possam ter contribuído para a lesão hepática;
Continue monitorando os parâmetros hepáticos, com foco em acompanhar a evolução dos sintomas;
Caso outros fatores não sejam identificados, discuta com a equipe de saúde a possibilidade de substituir o medicamento suspeito por uma alternativa mais segura;
Oriente o paciente sobre como identificar e a importância de relatar sintomas novos ou progressivos relacionados à função hepática.
`;
            } else if (result >= 6 && result <= 8) {
                feedback = `Relação provável. 
                A relação entre o medicamento e a lesão hepática é provável.
Avalie a necessidade de ajustes no tratamento, como reduzir a dose, alterar o esquema terapêutico ou suspender o medicamento;
Considere condições subjacentes, interações medicamentosas ou outros medicamentos como possíveis contribuintes para a lesão hepática;
Realize acompanhamento laboratorial regular para identificar qualquer evolução na função hepática;
Oriente ao paciente sobre os riscos potenciais do medicamento e os sinais de alerta a serem monitorados, garantindo que ele compreenda a importância do acompanhamento médico e farmacêutico.
`;
            } else if (result >= 9) {
                feedback = `Relação altamente provável. 
                A relação entre o medicamento e a lesão hepática é altamente provável.
Registre detalhadamente a ocorrência no prontuário do paciente, bem como o resultado do RUCAM;
Realize a notificação da suspeita do evento adverso no sistema de farmacovigilância da Anvisa, acessando o link: https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/notificacoes. Nesse site, você encontrará o tutorial para efetuar a notificação e as orientações para realizar o cadastro;
Discute junto com a equipe a interrupção ou substituição do medicamento suspeito;
Reforce a importância de monitorar parâmetros hepáticos (ALT, AST, bilirrubinas) para avaliar a evolução da lesão.
Oriente o paciente sobre os sinais de alerta e reforce a necessidade de acompanhamento contínuo.`;
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
        key: 'bmq',
        label: 'Questionario breve sobre medicação (BMQ)',
        description: 'Avaliar a adesão aos medicamentos e identificar barreiras relacionadas ao uso relacionadas a crenças, regime e recordação.',
        targetAudience: 'Pacientes que estão em uso de medicamentos de forma contínua, especialmente para condições crônicas',
        hintText: 'Quanto maior o escore, mais barreiras relacionadas ao uso de medicamentos.',
        durationText: '5 à 10 minutos',
        optionsType: 'sim ou não e dissertativa',
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
                text: 'Quais medicações você usou na ÚLTIMA SEMANA? (Nome e dosagem)',
                type: 'text-input'
            },
            {
                text: 'Por quantos dias você tomou cada remédio?',
                type: 'text-input'
            },
            {
                text: 'Quantas vezes por dia você tomou cada remédio?',
                type: 'text-input'
            },
            {
                text: 'Quantos comprimidos você tomou em cada vez?',
                type: 'text-input'
            },
            {
                text: 'Quantas vezes você esqueceu de tomar algum comprimido?',
                type: 'text-input'
            },
            {
                text: 'Como essa medicação funciona para você? (1 = funciona bem, 2 = regular, 3 = não funciona bem)',
                type: 'text-input'
            },
            {
                text: 'Alguma das suas medicações causa problemas para você? Se sim, quais?',
                type: 'text-input'
            },
            {
                text: 'Quanto essa medicação incomodou você (listar medicações)? (Muito, um pouco, muito pouco, nunca)',
                type: 'text-input'
            },
            {
                text: 'De que forma você é incomodado por essa medicação?',
                type: 'text-input'
            },
            {
                text: 'Quanto é difícil para você abrir ou fechar a embalagem? (Muito, um pouco, não muito)',
                type: 'text-input'
            },
            {
                text: 'Quanto é difícil para você ler o que está escrito na embalagem? (Muito, um pouco, não muito)',
                type: 'text-input'
            },
            {
                text: 'Quanto é difícil para você lembrar de tomar todo o remédio? (Muito, um pouco, não muito)',
                type: 'text-input'
            },
            {
                text: 'Quanto é difícil para você conseguir o medicamento? (Muito, um pouco, não muito)',
                type: 'text-input'
            },
            {
                text: 'Quanto é difícil para você tomar tantos comprimidos ao mesmo tempo? (Muito, um pouco, não muito)',
                type: 'text-input'
            },
            {
                text: 'O R falhou em listar (espontaneamente) os medicamentos prescritos no relato inicial?',
                prefix: 'R',
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
                prefix: 'R',
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
                prefix: 'R',
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
                prefix: 'R',
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
                prefix: 'R',
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
                prefix: 'R',
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
                text: 'O R se recusou a responder alguma das questões?',
                prefix: 'R',
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
                text: 'O R relatou "não funciona bem" ou "não sei" na resposta 6?',
                prefix: 'C',
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
                prefix: 'C',
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
                prefix: 'RE',
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
                text: 'O R "muita dificuldade" ou "alguma dificuldade" em responder a 12?',
                prefix: 'RE',
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
            const regime = finalValue.slice(14, 21);
            const crencas = finalValue.slice(21, 23);
            const recordacao = finalValue.slice(23, 24);

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
                Reforce com o paciente que uma boa adesão ao tratamento é benéfico para a sua qualidade de vida e discuta os benefícios a longo prazo da continuidade do cuidado;
                Reforce as instruções sobre o uso correto dos medicamentos, mesmo na ausência de sintomas;
                Identifique e antecipe possíveis desafios que possam surgir, garantindo que o paciente tenha suporte para continuar o tratamento específico.`;
            } else if (result === 1) {
                feedback = `Provável alta adesão
                O resultado indica uma probabilidade de alta adesão, mas com possibilidade de pequenas dificuldades pontuais.
                Explore com o paciente possíveis dificuldades isoladas, como esquecimento ou dúvidas sobre o uso correto do medicamento;
                Explique a importância de seguir o esquema terapêutico corretamente e como isso impacta nos resultados esperados;
                Sugira estratégias para melhorar a adesão, como uso de lembretes ou organização do horário dos medicamentos.
`;
            } else if (result === 2) {
                feedback = `Provável baixa adesão
                O resultado indica uma probabilidade de baixa adesão, demonstrando que o paciente pode enfrentar dificuldades relevantes no uso do medicamento.
Investigue os motivos da baixa adesão, como efeitos adversos, complexidade do regime terapêutico, questões financeiras ou falta de compreensão sobre a importância do tratamento;
Reforce o impacto positivo da adesão ao tratamento na prevenção de complicações e na melhoria da qualidade de vida;
Caso possível, discuta com o(s) prescritor(es) alternativas que possam simplificar e facilitar a adesão, como substituição de medicamentos ou redução na frequência de doses, caso seja possível;
Ofereça suporte adicional, como material educativo e oferta de serviços farmacêuticos clínicos periódicos para acompanhamento do paciente.
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
                    return { icon: faFaceSmile, color: '#389e0d' }
                }
                case value === 2: {
                    return { icon: faFaceMeh, color: '#ffd43b' }
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
                label: 'De jeito nenhum',
                value: 0
            },
            {
                label: 'Apenas algumas vezes',
                value: 1
            },
            {
                label: 'Algumas vezes',
                value: 2
            },
            {
                label: 'Muitas vezes',
                value: 3
            },
            {
                label: 'Mais que uma vez por dia',
                value: 4
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
Verifique se o paciente compreende que a asma é uma doença crônica e exige cuidado contínuo para evitar agravamentos.
Avalie o uso dos medicamentos prescritos e oriente o paciente quanto ao regime terapêutico, diferenciando os fármacos de uso contínuo (controladores) daqueles indicados para o alívio imediato dos sintomas (broncodilatadores de resgate).
Certifique-se de que o paciente compreenda corretamente a posologia, a via de administração e o momento apropriado para cada tipo de medicamento;
Solicite que o paciente demonstre como utiliza os medicamentos inalatórios, a fim de verificar se a técnica está correta;
Avalie se o paciente está utilizando os medicamentos conforme o que foi prescrito, e se necessário, ofereça orientações sobre como melhorar a adesão;
Explore, junto ao paciente, os possíveis fatores desencadeantes (gatilhos) das crises asmáticas, como exposição a ácaros, mofo, fumaça, mudanças climáticas e esforço físico, e forneça orientações individualizadas sobre estratégias para minimização ou eliminação desses fatores.
Oriente o paciente quanto às medidas não farmacológicas de controle da asma, incluindo a prática regular de atividade física adequada à condição clínica, e a higienização ambiental — com ênfase na remoção de cortinas, tapetes, bichos de pelúcia e outros objetos que favoreçam o acúmulo de poeira e alérgenos domiciliares.
Converse sobre a importância do tratamento, tanto farmacológico quanto não farmacológico, e quais resultados terapêuticos são esperados`;
            } else if (result >= 15 && result <= 19) {
                feedback = `Asma Parcialmente Controlada. 
O resultado indica que a doença não está bem controlada.
Solicite que o paciente demonstre como realiza a administração dos medicamentos inalatórios, para verificar se a técnica utilizada está correta;
Oriente a forma de uso dos medicamentos, diferenciando os medicamentos de uso contínuo daqueles usados para alívio dos sintomas;
Avalie se a adesão está sendo mantida e ofereça dicas para facilitar a rotina de uso dos medicamentos, incorporando em sua rotina lembretes ou ajustes na forma de administração;
Explore, junto ao paciente, os possíveis fatores desencadeantes (gatilhos) das crises asmáticas, como exposição a ácaros, mofo, fumaça, mudanças climáticas e esforço físico, e forneça orientações individualizadas sobre estratégias para minimização ou eliminação desses fatores.
Oriente sobre intervenções não farmacológicas no manejo da asma, tais como a prática regular de atividade física, remoção de tapetes e objetos que favoreçam o acúmulo de alérgenos, controle da exposição a animais domésticos e outras medidas de controle ambiental, sempre considerando as condições clínicas, sociais e culturais do paciente.
Converse sobre a importância do tratamento e resultados terapêuticos esperados.`;
            } else {
                feedback = `Asma Controlada.
            O resultado indica que a doença está bem controlada.
Reforce com o paciente os resultados positivos e estimule a manter os cuidados relacionados às medidas não farmacológicas e a adesão ao tratamento.
`;
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
        targetAudience: 'Pacientes diagnosticados com DPOC.',
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
                feedback = `Impacto Mínimo. 
            Pacientes com pontuação entre 0 e 9 apresentam níveis de sintomas e impacto mínimo na qualidade de vida.
Reforce a importância de manter a adesão ao tratamento prescrito para prevenir a progressão da doença;
Oriente sobre medidas não farmacológicas de cuidado, estimulando hábitos saudáveis, como a prática de atividades físicas específicas e a cessação do tabagismo, se aplicável;
Se o paciente for fumante, preste as orientações sobre os fluxos de acesso ao Programa de Cessação do Tabagismo de seu município, caso ele tenha interesse;
Incentive o acompanhamento periódico com a equipe de saúde.
`;
            } else if (result >= 10 && result <= 19) {
                feedback = `Impacto moderado. 
            Pacientes com pontuação entre 10 e 19 apresentam sintomas moderados e um impacto moderado na qualidade de vida.
Solicite que o paciente demonstre a forma como utiliza os dispositivos inalatórios e corrija a(s) etapa(s) que forem necessárias;
Reforce a importância da adesão ao tratamento e do uso correto dos dispositivos inalatórios;
Recomende, se necessário, a participação em programas de reabilitação pulmonar;
Oriente sobre os sinais de alerta que indicam a necessidade de procurar atendimento médico.
`;
            } else if (result >= 20 && result <= 29) {
                feedback = `Impacto significativo. 
            Pacientes com pontuação entre 20 e 29 apresentam sintomas graves e significativos na qualidade de vida.
Realize uma revisão detalhada do tratamento para verificar a adequação do plano terapêutico;
Eduque o paciente sobre o manejo de sintomas graves e como utilizar medicamentos de resgate;
Reforce a importância da adoção de medidas não farmacológicas para prevenir fatores agravantes;
Mantenha um acompanhamento médico frequente;
Verifique quando foi a última consulta e recomende nova avaliação médica.
`;
            }
            else {
                feedback = `Impacto muito significativo. 
           Pacientes com pontuação entre 30 e 40 apresentam sintomas muito graves e um impacto muito significativo na qualidade de vida.
Trabalhe em conjunto com uma equipe multidisciplinar para um manejo integral da DPOC;
Oriente o paciente e cuidadores sobre os cuidados do tratamento e como utilizar os medicamentos prescritos;
Ofereça suporte psicológico ou emocional, considerando o impacto na qualidade de vida;
Reforce a importância do acompanhamento rigoroso e possível ajuste terapêutico em curto prazo.
`;
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
        targetAudience: 'Pacientes com suspeita de reação adversa ao uso de medicamentos.',
        hintText: 'Quanto maior o escore, mais definida é a relação entre a reação adversa e o medicamento.',
        durationText: '3 à 7 minutos',
        optionsType: 'intensidade',
        options: [
            {
                label: 'Sim',
                value: 0
            },
            {
                label: 'Não',
                value: 1
            },
            {
                label: 'Não sei',
                value: 2
            }
        ],
        questions: [
            {
                text: 'Existem notificações conclusivas sobre esta reação?',
                options: [
                    { label: 'Sim', value: 'q1_sim' },
                    { label: 'Não', value: 'q1_nao' },
                    { label: 'Não sei', value: 'q1_nsei' }
                ]
            },
            {
                text: 'A reação apareceu após a administração do fármaco?',
                options: [
                    { label: 'Sim', value: 'q2_sim' },
                    { label: 'Não', value: 'q2_nao' },
                    { label: 'Não sei', value: 'q2_nsei' }
                ]
            },
            {
                text: 'A reação melhorou quando o fármaco foi suspenso?',
                options: [
                    { label: 'Sim', value: 'q3_sim' },
                    { label: 'Não', value: 'q3_nao' },
                    { label: 'Não sei', value: 'q3_nsei' }
                ]
            },
            {
                text: 'A reação reapareceu quando da sua readministração?',
                options: [
                    { label: 'Sim', value: 'q4_sim' },
                    { label: 'Não', value: 'q4_nao' },
                    { label: 'Não sei', value: 'q4_nsei' }
                ]
            },
            {
                text: 'Existem causas alterantivas (até mesmo outro fármaco)?',
                options: [
                    { label: 'Sim', value: 'q5_sim' },
                    { label: 'Não', value: 'q5_nao' },
                    { label: 'Não sei', value: 'q5_nsei' }
                ]
            },
            {
                text: 'A reação reaparece com a introdução de um placebo?',
                options: [
                    { label: 'Sim', value: 'q6_sim' },
                    { label: 'Não', value: 'q6_nao' },
                    { label: 'Não sei', value: 'q6_nsei' }
                ]
            },
            {
                text: 'A concentração plasmática está em nível tóxico?',
                options: [
                    { label: 'Sim', value: 'q7_sim' },
                    { label: 'Não', value: 'q7_nao' },
                    { label: 'Não sei', value: 'q7_nsei' }
                ]
            },
            {
                text: 'A reação aumentou com dose maior ou reduziu com dose menor?',
                options: [
                    { label: 'Sim', value: 'q8_sim' },
                    { label: 'Não', value: 'q8_nao' },
                    { label: 'Não sei', value: 'q8_nsei' }
                ]
            },
            {
                text: 'O paciente já experimentou semelhante reação anteriormente com medicamentos de mesmo fármaco?',
                options: [
                    { label: 'Sim', value: 'q9_sim' },
                    { label: 'Não', value: 'q9_nao' },
                    { label: 'Não sei', value: 'q9_nsei' }
                ]
            },
            {
                text: 'A reação foi confirmada por qualquer evidência objetiva?',
                options: [
                    { label: 'Sim', value: 'q10_sim' },
                    { label: 'Não', value: 'q10_nao' },
                    { label: 'Não sei', value: 'q10_nsei' }
                ]
            }
        ],
        calculateFunction: (finalValue = []) => {
            const scoreMap = {
                q1_sim: 1, q1_nao: 0, q1_nsei: 0,
                q2_sim: 2, q2_nao: -1, q2_nsei: 0,
                q3_sim: 1, q3_nao: 0, q3_nsei: 0,
                q4_sim: 2, q4_nao: -1, q4_nsei: 0,
                q5_sim: -1, q5_nao: 2, q5_nsei: 0,
                q6_sim: -1, q6_nao: 1, q6_nsei: 0,
                q7_sim: 1, q7_nao: 0, q7_nsei: 0,
                q8_sim: 1, q8_nao: 0, q8_nsei: 0,
                q9_sim: 1, q9_nao: 0, q9_nsei: 0,
                q10_sim: 1, q10_nao: 0, q10_nsei: 0
            };

            const result = finalValue.reduce((acc, value) => acc + (scoreMap[value] ?? 0), 0);

            let feedback;
            if (result >= 9) {
                feedback = `Reação Definida
                A relação entre o medicamento e a reação adversa é bem definida e muito provável.
Realize a notificação da suspeita do evento adverso no sistema de farmacovigilância da Anvisa, acessando o link: https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/notificacoes Nesse site, você encontrará o tutorial para efetuar a notificação e as orientações para realizar o cadastro;
Discuta com o (a) prescritor (a) a descontinuação do medicamento ou sua substituição por outra alternativa terapêutica, conforme a gravidade da reação adversa;
Informe o paciente sobre os riscos relacionados à medicamentos e os cuidados necessários;
Acompanhe de perto o paciente para monitorar possíveis recorrências da reação adversa, caso o medicamento não seja substituído`;
            } else if (result >= 5 && result <= 8) {
                feedback = `Reação Provável
                A relação entre o medicamento e a reação adversa é provável.
Reforce a importância de monitorar os sintomas e reações do paciente;
Avalie a possibilidade de reduzir a dose, ajustar o regime de administração ou trocar o medicamento, caso necessário;
Ofereça orientações claras sobre os sinais de recorrência e o que fazer em caso de novos sintomas;
Considere um acompanhamento mais frequente do paciente para garantir que a reação não se agrave.
`;
            } else if (result >= 1 && result <= 4) {
                feedback = `Reação Possível
                A relação entre o medicamento e a reação adversa é possível, mas outras causas podem estar envolvidas.
Avalie o histórico do paciente e considere outras possíveis causas para a reação observada;
Monitore de perto a evolução dos sintomas, realizando exames adicionais, se necessário, para investigar outras condições;
Se a reação persistir ou piorar, considere encaminhamento para uma avaliação médica mais aprofundada;
Explique ao paciente que a relação com o medicamento não é totalmente definida e reforce a importância de continuar o acompanhamento.`;
            }
            else {
                feedback = `Reação Duvidosa
                A relação entre o medicamento e a reação adversa é duvidosa, ou seja, é improvável que o medicamento tenha causado a reação.
A reação provavelmente não está relacionada ao medicamento, então o tratamento pode ser mantido conforme prescrito;
Explique ao paciente que, com base na avaliação utilizando este instrumento, o medicamento não parece ser a causa da reação observada;
Se os sintomas persistirem, considere outras possíveis causas e realize a investigação necessária;
Mantenha o acompanhamento do paciente e forneça orientações sobre cuidados gerais.
`;
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