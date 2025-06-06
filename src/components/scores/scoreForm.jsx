import { Button, Card, Radio, Statistic, Tooltip } from "antd";
import { scores } from "../../utils/constants/scoresConstants";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import jsPDF from 'jspdf';

export default function ScoreForm({ scoreKey }) {

    const score = scores.find(score => score.key === scoreKey);

    const [selectedRadio, setSelectedRadio] = useState(score.options[0]);
    const [currentState, setCurrentState] = useState('start');
    const [result, setResult] = useState({
        result: 0, feedback: ''
    });
    const [selectedOptions, setSelectedOptions] = useState(new Array(score.questions.length).fill(null));
    const [nomePaciente, setNomePaciente] = useState('');
    const [farmaceutico, setFarmaceutico] = useState('');
    const [data, setData] = useState('');

    const handleScoreSelection = (questionIndex, value) => {
        setSelectedOptions(prev => [
            ...prev.slice(0, questionIndex),
            value,
            ...prev.slice(questionIndex + 1, questionIndex.length),
        ]);
    };

    const handleFinishForm = () => {
        // Lógica para calcular a pontuação
        const finalResult = score.calculateFunction(selectedOptions);
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

    const downloadPDF = () => {
        const doc = new jsPDF();
        const textoFeedback = `${scores[0].label}\n\nResultado: ${result.result}\n\nPaciente: ${nomePaciente}\nFarmacêutico: ${farmaceutico}\nData: ${data}\n\nRecomendação: ${result.feedback}`;
        const feedback = doc.splitTextToSize(textoFeedback, 180);
        let yOffset = 10;
        feedback.forEach(linha => {
            doc.text(linha, 5, yOffset);
            yOffset += 10;
        })
        doc.save('feedback.pdf');
    };

    const renderStart = () => (
        <Card
            title={(
                <div className="py-4">
                    <div className="">
                        {score.label}
                    </div>
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
        <Card title={`Faça as perguntas ao paciente, orientando-o a responder com base nas ultimas quatro semanas, utilizando uma escala de ${score.optionsType} de cinco itens`}>
            {score.questions.map((question, index) => (
                <div key={index}>
                    <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row">
                        {/* Pergunta */}
                        <div className="flex gap-2 items-start">
                            <div className="text-colorPrimary font-semibold">{index + 1}</div>
                            <div>{question.text}</div>
                        </div>

                        {/* Alternativas */}
                        <div className="mt-2 lg:mt-0 lg:ml-auto lg:pl-8">
                            <Radio.Group
                                onChange={e => handleScoreSelection(index, e.target.value)}
                                value={selectedOptions[index]}
                            >
                                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
                                    {(question.options || score.options).map(option => (
                                        <Radio key={option.value} value={option.value}>
                                            {option.label}
                                        </Radio>
                                    ))}
                                </div>
                            </Radio.Group>
                        </div>
                    </div>

                    {/* Separador */}
                    <div className="my-4 w-full h-[1px] bg-[#ededed]" />
                </div>
            ))}

            <div className="mt-6 flex justify-end">
                <Button type="primary" onClick={handleFinishForm}>
                    Calcular Escore
                </Button>
            </div>
        </Card>
    );


    const renderResult = () => (
        <Card title={score.label}>
            <div className="flex flex-col md:flex-row gap-6">
                <Card>
                    <Statistic title="Resultado" suffix={getEmoji()} value={result.result} />
                </Card>

                <div>
                    <div className="font-medium">{score.hintText}</div>
                    <div className="mt-4">
                        <span className="text-[#000a] mr-2">
                            Recomendação:
                        </span>
                        <span>
                            {result.feedback}
                        </span>
                    </div>
                    <div className="flex flex-col py-6 md:flex-row gap-6">
                        <label htmlFor="nomePaciente">Nome do Paciente:  </label>
                        <input
                            type="text"
                            placeholder="Nome do Paciente"
                            value={nomePaciente}
                            onChange={(e) => setNomePaciente(e.target.value)}
                        />
                        <label htmlFor="farmaceutico">Nome do Farmacêutico:  </label>
                        <input
                            type="text"
                            placeholder="Farmacêutico"
                            value={farmaceutico}
                            onChange={(e) => setFarmaceutico(e.target.value)}
                        />
                        <label htmlFor="data">Data:  </label>
                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 flex gap-4">
                        <Button type="primary" onClick={restartScore}>
                            Refazer Escore
                        </Button>
                        <Tooltip title="Baixar Resultado">
                            <Button icon={<FontAwesomeIcon icon={faDownload} />} onClick={downloadPDF} />
                        </Tooltip>
                    </div>
                </div>
            </div>
        </Card>
    )

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