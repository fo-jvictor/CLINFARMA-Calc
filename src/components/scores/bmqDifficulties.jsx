import React from "react";

const difficultiesList = [
  "Abrir ou fechar a embalagem",
  "Ler o que está escrito na embalagem",
  "Lembrar de tomar todo o medicamento",
  "Conseguir o medicamento",
  "Tomar tantos comprimidos ao mesmo tempo",
];

const difficultyOptions = [
  { value: "Muito difícil", label: "Muito difícil", color: "text-red-600" },
  { value: "Um pouco difícil", label: "Um pouco difícil", color: "text-yellow-600" },
  { value: "Não muito difícil", label: "Não muito difícil", color: "text-green-600" }
];

const BmqDifficulties = ({ difficulties, setDifficulties, medicationId = 0 }) => {
  const difficultiesArray = Array.isArray(difficulties) ? difficulties : new Array(difficultiesList.length).fill(null);
  
  const handleChange = (index, value) => {
    const newDiffs = [...difficultiesArray];
    newDiffs[index] = value;
    setDifficulties(newDiffs);
  };

  return (
    <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800 text-center">
          Dificuldades encontradas
        </h4>
        <p className="text-xs text-gray-600 text-center mt-1">
          Selecione o nível de dificuldade para cada item
        </p>
      </div>
      
      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header da tabela */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-r border-gray-200">
                Atividade
              </th>
              {difficultyOptions.map((option) => (
                <th key={option.value} className="px-3 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 last:border-r-0">
                  <span className={`${option.color} font-semibold`}>
                    {option.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Corpo da tabela */}
          <tbody className="divide-y divide-gray-200">
            {difficultiesList.map((label, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-200 font-medium">
                  {label}
                </td>
                {difficultyOptions.map((option) => (
                  <td key={option.value} className="px-3 py-4 text-center border-r border-gray-200 last:border-r-0">
                    <label className="flex items-center justify-center cursor-pointer group">
                      <input
                        type="radio"
                        name={`difficulty-${medicationId}-${index}`}
                        value={option.value}
                        checked={difficultiesArray[index] === option.value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="w-4 h-4 text-blue-600 bg-white border-2 border-gray-300 rounded-full focus:ring-blue-500 focus:ring-2 transition-all duration-200 group-hover:border-blue-400"
                      />
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                        {option.value}
                      </span>
                    </label>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

    </div>
  );
};

export default BmqDifficulties;
