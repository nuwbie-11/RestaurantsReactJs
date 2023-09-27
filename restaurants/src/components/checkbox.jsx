import { useEffect, useState } from "react";

import { useParameterContext } from "../context/ParameterContext";

export default function CheckBoxes(props) {
  const { myParams, setParams } = useParameterContext();
  const [isChecked, setChecked] = useState(true);

  const handleChecks = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    setParams({
      ...myParams,
      isOpen: isChecked,
    });
  }, [isChecked]);

  return (
    <div className="checkbox-wrapper py-2 border-b-2 border-sky-500">
      <input
        type="checkbox"
        name=""
        id={props.id}
        checked={isChecked}
        onChange={handleChecks}
        className="w-3 h-3 text-sky-500 bg-transparant border-gray-300 rounded-full"
      />
      <label htmlFor={props.id} className="pl-2 text-sky-900">
        {props.label}
      </label>
    </div>
  );
}
