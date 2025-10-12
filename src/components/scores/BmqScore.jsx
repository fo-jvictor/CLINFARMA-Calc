import React from "react";
import { Input, Button } from "antd";
import BmqDifficulties from "./bmqDifficulties";

const BmqScore = ({ medications, setMedications }) => {
  const handleChange = (index, field, value) => {
    const newMeds = [...medications];
    newMeds[index][field] = value;
    setMedications(newMeds);
  };

  const addMedication = () => {
    setMedications([
      ...medications,
      {
        name: "",
        dosage: "",
        timesPerDay: "",
        pills: "",
        missed: "",
        effectiveness: "",
        botherness: "",
        bothernessJustification: ""
      },
    ]);
  };

  const removeMedication = (index) => {
    const newMeds = medications.filter((_, i) => i !== index);
    setMedications(newMeds);
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1200px]">
        {/* Table Header */}
        <div className="grid grid-cols-[200px_120px_120px_120px_120px_150px_150px_180px_100px] gap-2 font-semibold border-b-2 border-gray-300 pb-3 mb-3 text-xs sm:text-sm bg-gray-50 px-2 py-2 rounded-t">
          <div className="text-center font-bold text-gray-700">Nome do medicamento</div>
          <div className="text-center font-bold text-gray-700">Dosagem utilizada</div>
          <div className="text-center font-bold text-gray-700">Frequência diária</div>
          <div className="text-center font-bold text-gray-700">Comprimidos por uso</div>
          <div className="text-center font-bold text-gray-700">Vezes que esqueceu</div>
          <div className="text-center font-bold text-gray-700">Como essa medicação funciona para você?</div>
          <div className="text-center font-bold text-gray-700">Causou incômodo?</div>
          <div className="text-center font-bold text-gray-700">Se sim, qual incômodo?</div>
        </div>

        {medications.map((med, index) => (
          <div key={index} className="mb-4">
            {/* Linha do medicamento */}
            <div className="grid grid-cols-[200px_120px_120px_120px_120px_150px_150px_180px_100px] gap-2 mb-2 items-center text-sm sm:text-base px-2 py-2 hover:bg-gray-50 rounded">
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="Ex: Paracetamol"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.dosage}
                onChange={(e) => handleChange(index, "dosage", e.target.value)}
                placeholder="Ex: 500mg"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.timesPerDay}
                onChange={(e) => handleChange(index, "timesPerDay", e.target.value)}
                placeholder="Ex: 3x ao dia"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.pills}
                onChange={(e) => handleChange(index, "pills", e.target.value)}
                placeholder="Ex: 2 comprimidos"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.missed}
                onChange={(e) => handleChange(index, "missed", e.target.value)}
                placeholder="Ex: 1 vez"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.effectiveness}
                onChange={(e) => handleChange(index, "effectiveness", e.target.value)}
                placeholder="Funciona bem | Não funciona"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.botherness}
                onChange={(e) => handleChange(index, "botherness", e.target.value)}
                placeholder="Ex: Sim | Não"
                size="small"
              />
              <Input
                className="w-full text-xs sm:text-sm"
                value={med.bothernessJustification}
                onChange={(e) => handleChange(index, "bothernessJustification", e.target.value)}
                placeholder="Ex: Náusea | Dor de cabeça | etc."
                size="small"
              />
              <Button
                danger
                onClick={() => removeMedication(index)}
                size="small"
                className="text-xs w-full"
              >
                Remover
              </Button>
            </div>
            
            {/* Seção de dificuldades para cada medicamento */}
            <BmqDifficulties
              difficulties={med.difficulties || {}}
              setDifficulties={(newDiffs) => {
                const updated = [...medications];
                updated[index].difficulties = newDiffs;
                setMedications(updated);
              }}
              medicationId={index}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Button onClick={addMedication} type="primary" className="bg-blue-600 hover:bg-blue-700">
          + Adicionar medicamento
        </Button>
      </div>
    </div>
  );
};

export default BmqScore;