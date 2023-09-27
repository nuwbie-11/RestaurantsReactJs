import React from "react";

import { createContext, useState, useContext } from "react";

export const ParameterContext = createContext();

const ParameterContextProvider = ({ children }) => {
  const [myParams, setParams] = useState({
    cate: "",
    price: "",
    isOpen: true,
  });

  return (
    <ParameterContext.Provider value={{ myParams, setParams }}>
      {children}
    </ParameterContext.Provider>
  );
};

export function useParameterContext() {
  const myParams = useContext(ParameterContext);

  if ((myParams === null) | (myParams === undefined)) {
    throw new Error(
      "useParameterContext Should used on ParameterContextProvider"
    );
  }

  return myParams;
}

export default ParameterContextProvider;
