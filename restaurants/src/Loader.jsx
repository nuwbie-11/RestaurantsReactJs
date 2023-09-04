import React from "react";
import { useLocation } from "react-router-dom";
import Main from "./core/Main";


function Loader() {


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);// access query parameters
    let cateValue = (queryParams.get('cate') === 'undefined') ? '' : queryParams.get('cate')
    let priceValue =(queryParams.get('price') === 'undefined') ? '' : queryParams.get('price')
    let statusValue =(queryParams.get('isOpen') === 'null') ? '' : queryParams.get('isOpen')


    const myParams = {
      cate:cateValue,
      price:priceValue,
      isOpen:statusValue
    }

  return(
    <div>
      <Main params={myParams} ></Main>
    </div>
  )
  }

export default Loader;