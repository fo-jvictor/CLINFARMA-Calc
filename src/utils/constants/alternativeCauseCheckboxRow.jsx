import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

export default function AlternativeCauseCheckboxRow({
  label,
  value,
  onChange,
  highlyProbable = false,
  onHighlyProbableChange,
  isHighlyProbableCheckbox = false,
}) {
  const [state, setState] = useState(value || { negative: false, notDone: false });

  const handleChange = (field) => (e) => {
    const checked = e.target.checked;
    let newState;

    if (field === 'negative') {
      newState = {
        negative: checked,
        notDone: checked ? false : state.notDone,
      };
    } else if (field === 'notDone') {
      newState = {
        negative: checked ? false : state.negative,
        notDone: checked,
      };
    }

    setState(newState);
    if (onChange) onChange(newState);
  };

  // Especial: controle do checkbox "-3"
  const handleHighlyProbableToggle = (e) => {
    const checked = e.target.checked;
    if (onHighlyProbableChange) onHighlyProbableChange(checked);
  };

  useEffect(() => {
    if (value) setState(value);
  }, [value]);

  if (isHighlyProbableCheckbox) {
    return (
      <div className="flex items-start gap-4 mb-2">
        <span className="text-sm flex-1 min-w-0">{label}</span>
        <div className="flex-shrink-0">
          <Checkbox checked={highlyProbable} onChange={handleHighlyProbableToggle}>
            {label}
          </Checkbox>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 mb-2">
      <span className="text-sm flex-1 min-w-0 break-words">{label}</span>
      <div className="flex gap-4 flex-shrink-0">
        <Checkbox
          checked={state.negative}
          onChange={handleChange('negative')}
          disabled={highlyProbable}
        >
          Negativo
        </Checkbox>
        <Checkbox
          checked={state.notDone}
          onChange={handleChange('notDone')}
          disabled={highlyProbable}
        >
          Não feito
        </Checkbox>
      </div>
    </div>
  );
}
