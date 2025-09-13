import React from "react";
import { Input, Button } from "antd";

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
        botherness:""
      },
    ]);
  };

  const removeMedication = (index) => {
    const newMeds = medications.filter((_, i) => i !== index);
    setMedications(newMeds);
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[1000px]">
        {/* Table Header */}
        <div className="grid grid-cols-[200px_120px_120px_120px_120px_150px_180px_100px] gap-2 font-semibold border-b-2 border-gray-300 pb-3 mb-3 text-xs sm:text-sm bg-gray-50 px-2 py-2 rounded-t">
          <div className="text-center font-bold text-gray-700">Nome da medicação</div>
          <div className="text-center font-bold text-gray-700">Dosagem utilizada</div>
          <div className="text-center font-bold text-gray-700">Frequência diária</div>
          <div className="text-center font-bold text-gray-700">Comprimidos por uso</div>
          <div className="text-center font-bold text-gray-700">Vezes que esqueceu</div>
          <div className="text-center font-bold text-gray-700">Eficácia percebida</div>
          <div className="text-center font-bold text-gray-700">Causou incômodo?</div>
        </div>

        {medications.map((med, index) => (
          <div
            key={index}
            className="grid grid-cols-[200px_120px_120px_120px_120px_150px_180px_100px] gap-2 mb-3 items-center text-sm sm:text-base px-2 py-2 hover:bg-gray-50 rounded"
          >
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
              placeholder="Ex: Muito eficaz"
              size="small"
            />
            <Input
              className="w-full text-xs sm:text-sm"
              value={med.botherness}
              onChange={(e) => handleChange(index, "botherness", e.target.value)}
              placeholder="Ex: Sim, náusea"
              size="small"
            />
            <Button 
              danger 
              onClick={() => removeMedication(index)}
              size="small"
              className="text-xs"
            >
              Remover
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Button onClick={addMedication} type="primary" className="bg-blue-600 hover:bg-blue-700">
          + Adicionar medicação
        </Button>
      </div>
    </div>
  );
};

export default BmqScore;