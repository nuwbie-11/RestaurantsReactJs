import { useLocation } from "react-router-dom";
import Main from "./core/Main";


function Loader() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);// access query parameters
    const paramValue = queryParams.get("cate");
    // console.log('Dari Pre');
    // console.log(queryParams);

  return(
    <div>
      <Main params={paramValue} ></Main>
    </div>
  )
  }

export default Loader;