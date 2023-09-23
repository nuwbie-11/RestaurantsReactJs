import { createContext, useState } from "react"
import { useLocation } from "react-router-dom";

const ParameterContext = createContext(null)

export default function ParameterContextProvider(props){

    const [myParams,setParams] = useState(null)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);// access query parameters
    let cateValue = (queryParams.get('cate') === 'undefined') ? '' : queryParams.get('cate')
    let priceValue =(queryParams.get('price') === 'undefined') ? '' : queryParams.get('price')
    let statusValue =(queryParams.get('isOpen') === 'null') ? '' : queryParams.get('isOpen')


    setParams({
      cate:cateValue,
      price:priceValue,
      isOpen:statusValue
    })

    return(
        <ParameterContext.Provider value={
            myParams
        }>
            {props.children}
        </ParameterContext.Provider>
    )
}