import { useEffect, useState } from "react";
import { useParameterContext } from "../context/ParameterContext";
import { priceChoices } from "../utils/data";
import Dropdowns from "../components/dropdown";

export default function Prices(props) {
  const { myParams, setParams } = useParameterContext();
  const [value, setValue] = useState(0);
  const [choices, setChoices] = useState(priceChoices);

  const handleChanges = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setParams({
      ...myParams,
      price: choices[value],
    });
  }, []);

  useEffect(() => {
    setParams({
      ...myParams,
      price: choices[value],
    });
    // console.log(myParams)
  }, [value]);

  return (
    <>
      {
        <Dropdowns
          Choices={choices}
          name="price"
          value={value}
          handler={handleChanges}
        ></Dropdowns>
      }
      {/* <p>{myParams.price}</p> */}
    </>
  );
}
