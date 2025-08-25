import { Button, Card, Checkbox, Radio, Statistic, Tooltip } from "antd";
import { scores } from "../../utils/constants/scoresConstants";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AlternativeCauseCheckboxRow from '../../utils/constants/alternativeCauseCheckboxRow';
import { Input } from 'antd';
import { downloadPDF } from "../../utils/constants/pdfGenerator";


export default function ScoreForm({ scoreKey }) {

    const score = scores.find(score => score.key === scoreKey);
    const [selectedRadio, setSelectedRadio] = useState(score.options[0]);
    const [currentState, setCurrentState] = useState('start');
    const [result, setResult] = useState({
        result: 0, feedback: ''
    });
    const [selectedOptions, setSelectedOptions] = useState(new Array(score.questions.length).fill(null));
    const [nomePaciente, setNomePaciente] = useState('');
    const [crf, setCrf] = useState('');
    const [farmaceutico, setFarmaceutico] = useState('');
    const [medicamento, setMedicamento] = useState('');
    const [data, setData] = useState('');
    const [rucamState, setRucamState] = useState({
        highlyProbable: false,
        groupI: {},
        groupII: {},
    });

    useEffect(() => {
        const rucamQuestion = score.questions.find(q => q.type === 'rucam-alternative-causes');
        if (rucamQuestion) {
            const groupI = {};
            rucamQuestion.groupI.forEach((_, i) => {
                groupI[i] = { negative: false, notDone: false };
            });
            const groupII = {};
            rucamQuestion.groupII.forEach((_, i) => {
                groupII[i] = { negative: false, notDone: false };
            });
            setRucamState({
                highlyProbable: false,
                groupI,
                groupII,
            });
        }
    }, [score.questions]);

    const handleRucamHighlyProbableChange = (checked) => {
        setRucamState(state => ({ ...state, highlyProbable: checked }));
    };

    // Handler para os checkboxes de grupos I e II
    const handleRucamGroupChange = (group, index, newValue) => {
        setRucamState(state => ({
            ...state,
            [group]: {
                ...state[group],
                [index]: newValue,
            },
        }));
    };


    const handleScoreSelection = (questionIndex, value) => {
        setSelectedOptions(prev => [
            ...prev.slice(0, questionIndex),
            value,
            ...prev.slice(questionIndex + 1, questionIndex.length),
        ]);
    };

    const handleFinishForm = () => {
        // Lógica para calcular a pontuação
        let finalValue = [...selectedOptions];

        if (score.key === 'lhp') {
            finalValue.push(
                {
                    type: 'rucam-alternative-causes',
                    groupI: Object.values(rucamState.groupI),
                    groupII: Object.values(rucamState.groupII),
                    highlyProbable: rucamState.highlyProbable,
                }
            );
        }
        const finalResult = score.calculateFunction(finalValue);
        finalResult.feedback = finalResult.feedback + `\nLembre-se de registrar o resultado desse escore na aba Cuidar+ do sistema AME, no respectivo serviço clínico realizado`
        setResult(finalResult);
        setCurrentState('result');
    }

    const getEmoji = () => {
        const { icon, color } = score.getEmoji(result.result);
        return <FontAwesomeIcon icon={icon} className="ml-1" style={{ color: color }} />
    }

    const restartScore = () => {
        setSelectedOptions(new Array(score.questions.length).fill(null));
        setResult({ result: 0, feedback: '' });
        setCurrentState('start');
    }

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



    const renderStart = () => (
        <Card
            title={(
                <div className="py-4">
                    <p className="whitespace-normal break-words max-w-full">
                        {score.label}
                    </p>
                </div>
            )}
        >
            <div>
                <span className="text-[#000a] mr-2">Objetivo:</span>
                <span>{score.description}</span>
            </div>

            <div>
                <span className="text-[#000a] mr-2">Público-Alvo:</span>
                <span>{score.targetAudience}</span>
            </div>

            <div>
                <span className="text-[#000a] mr-2">Tempo:</span>
                <span>{score.durationText}</span>
            </div>

            <div className="mt-2">
                {score.generalInformation ?
                    score.generalInformation.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))
                    : ''}
            </div>

            <div className="mt-4 font-semibold">
                {score.questions.length} itens em escala de {score.optionsType} <span className="text-[#0007] font-normal">Exemplo:</span>
            </div>
            <div className="mt-4">
                <Radio.Group onChange={e => setSelectedRadio(e.target.value)} value={selectedRadio}>
                    {score.options.map(option => (
                        <Radio
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </Radio>
                    ))}
                </Radio.Group>
            </div>
            <div className="mt-6">
                <Button type="primary" onClick={() => setCurrentState('form')}>
                    Aplicar Escore
                </Button>
            </div>
        </Card>
    );

    const renderForm = () => (
        <Card title={
            <p className="whitespace-normal break-words max-w-full">
                Faça as perguntas ao paciente, orientando-o a responder com base nas últimas quatro semanas, utilizando uma escala de {score.optionsType} de pelo menos {score.options.length} itens
            </p>
        }>
            {score.questions.map((question, index) => {
                if (question.type === 'text-input') {
                    return (
                        <div key={index} className="mb-6">
                            <div className="flex items-start gap-2 mb-3">
                                <div className="text-colorPrimary font-semibold">
                                    {formatQuestionNumber(index, score)}
                                </div>
                                <div className="whitespace-normal break-words max-w-full">
                                    {question.text}
                                </div>
                            </div>

                            <div className="ml-6">
                                <Input.TextArea
                                    rows={4}
                                    value={selectedOptions[index] || ''}
                                    onChange={e => handleScoreSelection(index, e.target.value)}
                                    placeholder="Digite sua resposta aqui..."
                                />
                            </div>

                            {index < score.questions.length - 1 && (
                                <div className="my-4 w-full h-[1px] bg-[#ededed]" />
                            )}
                        </div>
                    );
                }


                if (question.type === 'rucam-alternative-causes') {
                    return (
                        <div key={index} className="mb-6">
                            <div className="flex items-start gap-2 mb-3">
                                <div className="text-colorPrimary font-semibold">{formatQuestionNumber(index, score)}</div>
                                <div className="whitespace-normal break-words max-w-full">{question.text}</div>
                            </div>

                            <AlternativeCauseCheckboxRow
                                isHighlyProbableCheckbox
                                label="Causa alternativa altamente provável"
                                highlyProbable={rucamState.highlyProbable}
                                onHighlyProbableChange={handleRucamHighlyProbableChange}
                            />

                            <div className="ml-6">
                                <div className="mb-2 font-semibold">Grupo I</div>
                                {question.groupI.map((label, i) => (
                                    <AlternativeCauseCheckboxRow
                                        key={`groupI-${i}`}
                                        label={label}
                                        value={rucamState.groupI[i]}
                                        onChange={newValue => handleRucamGroupChange('groupI', i, newValue)}
                                        highlyProbable={rucamState.highlyProbable}
                                    />
                                ))}

                                <div className="mt-4 mb-2 font-semibold">Grupo II</div>
                                {question.groupII.map((label, i) => (
                                    <AlternativeCauseCheckboxRow
                                        key={`groupII-${i}`}
                                        label={label}
                                        value={rucamState.groupII[i]}
                                        onChange={newValue => handleRucamGroupChange('groupII', i, newValue)}
                                        highlyProbable={rucamState.highlyProbable}
                                    />
                                ))}
                            </div>

                            <div className="my-4 w-full h-[1px] bg-[#ededed]" />
                        </div>
                    );
                }

                // Questões normais
                return (
                    <div key={index} className="mb-6">
                        <div className="flex items-start gap-2 mb-3">
                            <div className="text-colorPrimary font-semibold">{formatQuestionNumber(index, score)}</div>
                            <div className="whitespace-normal break-words max-w-full">{question.text}</div>
                        </div>

                        <div className="ml-6">
                            <Radio.Group
                                onChange={e => handleScoreSelection(index, e.target.value)}
                                value={selectedOptions[index]}
                            >
                                <div className="flex flex-col gap-2">
                                    {(question.options || score.options).map(option => (
                                        <Radio key={option.value} value={option.value}>
                                            <span className="whitespace-normal break-words">{option.label}</span>
                                        </Radio>
                                    ))}
                                </div>
                            </Radio.Group>
                        </div>

                        {index < score.questions.length - 1 && (
                            <div className="my-4 w-full h-[1px] bg-[#ededed]" />
                        )}
                    </div>
                );
            })}

            <div className="mt-6 flex justify-end">
                <Button type="primary" onClick={handleFinishForm}>
                    Calcular Escore
                </Button>
            </div>
        </Card>
    );


    const renderResult = () => (
        <Card title={
            <p className="whitespace-normal break-words max-w-full">
                {score.label}
            </p>
        }>

            <div className="flex flex-col md:flex-row gap-6">
                <Card>
                    <Statistic title="Resultado" suffix={getEmoji()} value={result.result} />
                </Card>

                <div className="flex-1 min-w-0">
                    <div className="font-medium">{score.hintText}</div>

                    <div className="mt-4">
                        <span className="text-[#000a] mr-2 font-semibold">
                            Recomendação:
                        </span>
                        <div className="flex flex-col gap-2 mt-2 whitespace-normal break-words">
                            {result.feedback.split('\n').map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 py-6 md:grid md:grid-cols-4 md:gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="nomePaciente">Nome do Paciente:</label>
                            <input
                                type="text"
                                placeholder="Paciente"
                                value={nomePaciente}
                                onChange={(e) => setNomePaciente(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="nomePaciente">Conselho Regional de Farmácia (CRF):</label>
                            <input
                                type="text"
                                placeholder="CRF"
                                value={crf}
                                onChange={(e) => setCrf(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="farmaceutico">Nome do Farmacêutico:</label>
                            <input
                                type="text"
                                placeholder="Farmacêutico"
                                value={farmaceutico}
                                onChange={(e) => setFarmaceutico(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="Medicamento">Nome do medicamento:</label>
                            <input
                                type="text"
                                placeholder="Medicamento"
                                value={medicamento}
                                onChange={(e) => setMedicamento(e.target.value)}
                                className="w-full"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="data">Data:</label>
                            <input
                                type="date"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex gap-4">
                        <Button type="primary" onClick={restartScore}>
                            Refazer Escore
                        </Button>
                        <Tooltip title="Baixar Resultado">
                            <Button icon={<FontAwesomeIcon icon={faDownload} />} onClick={handleDownload} />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Card>
    )

    const handleDownload = () => {
        downloadPDF(score, result, selectedOptions, nomePaciente, crf, farmaceutico, data, medicamento)
    };

    const states = {
        start: renderStart,
        form: renderForm,
        result: renderResult,
    };

    return (
        <div className="w-full h-auto p-6 md:p-8">
            {states[currentState]()}
        </div>
    )
}