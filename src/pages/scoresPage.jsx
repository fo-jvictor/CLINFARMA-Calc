import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ScoresList from "../components/scores/scoreList";
import ScoreForm from "../components/scores/scoreForm";

export default function ScoresPage() {

    const [selectedScore, setSelectedScore] = useState(null);

    const handleScoreSelection = key => {
        setSelectedScore(key);
    }

    return (
        <div
            className="w-full flex flex-col md:flex-row md:h-[calc(100vh-80px-96px)]"
        >
            <div
                className="h-full w-full md:max-w-96 flex flex-col justify-center text-white py-12 px-6 md:px-8 text-center"
                style={{
                    background: 'linear-gradient(125deg, var(--color-primary) 50%, var(--color-primary-light) 50%)'
                }}
            >
                <FontAwesomeIcon icon={faRectangleList} className="text-8xl" />
                <div className="mt-8 text-3xl font-semibold">Lista de Escores</div>
                <div className="mt-6 text-lg">
                    Compilado de alguns escores utilizados pelos farmacêuticos do Rio Grande do Sul para a prática clínica.
                </div>
            </div>
            <div className="h-full w-full overflow-auto">
                {selectedScore === null ? (
                    <ScoresList onSelect={handleScoreSelection} />
                ) : (
                    <ScoreForm scoreKey={selectedScore} />
                )}
            </div>



        </div>
    );
}