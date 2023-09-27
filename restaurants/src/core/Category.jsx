import { useEffect, useState } from "react";
import { useParameterContext } from "../context/ParameterContext";
import { categoryChoices } from "../utils/data";
import Dropdowns from "../components/dropdown";

import { fetchCategories } from "../utils/services";

export default function Categories(props) {
  const { myParams, setParams } = useParameterContext();
  const [value, setValue] = useState(0);
  const [choices, setChoices] = useState(categoryChoices);

  const handleChanges = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setParams({
      ...myParams,
      cate: choices[value],
    });
    fetchCategories().then((response) => {
      setChoices(response);
    });
  }, []);

  useEffect(() => {
    setParams({
      ...myParams,
      cate: choices[value],
    });
  }, [value]);

  return (
    <>
      {
        <Dropdowns
          Choices={choices}
          value={value}
          handler={handleChanges}
          name="category"
        ></Dropdowns>
      }
      {/* <p>{myParams.cate}</p> */}
    </>
  );
}
