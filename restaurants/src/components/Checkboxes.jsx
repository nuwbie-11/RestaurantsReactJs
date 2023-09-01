import React from "react";


const Checkbox = (props) => {
    const [isChecked,setChecks] = React.useState(false);

    const handleChecks = () => {
        setChecks(!isChecked);
    };

    return (
        <div className=" py-2 checkbox-wrapper border-b-2 border-sky-300">
        <input
          id={props.checkboxId}
          checked ={isChecked}
          onChange={handleChecks}
          type="checkbox"
          value=""
          className="w-3 h-3 text-fuchsia-800 bg-transparant border-gray-300 focus:bg-fuchsia-300 focus:ring-2 rounded-full"
        />
        <label
          htmlFor="open-now"
          className="pl-2 text-sky-800"
        >
          {props.label}
        </label>
      </div>
    )
}

export default Checkbox;