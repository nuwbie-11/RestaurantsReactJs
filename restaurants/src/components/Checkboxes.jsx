import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Checkbox = (props) => {
    const [isChecked,setChecks] = React.useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const urlSearchParams = new URLSearchParams(location.search);

    const handleChecks = () => {
        setChecks(!isChecked);
    };

    const pushParams = () => {
      let cateValue = urlSearchParams.get("cate");
      let priceValue = urlSearchParams.get("price");
      // let statsValue = urlSearchParams.get("isOpen");
  
      
      urlSearchParams.set("cate", cateValue);
      urlSearchParams.set("isOpen", isChecked);
      urlSearchParams.set("price", priceValue);
      navigate({
        pathname: "/",
        search: `?${urlSearchParams.toString()}`,
      });
    };

    React.useEffect(()=>{
      pushParams()
    },[isChecked])

    React.useEffect(()=>{
      // urlSearchParams.set("isOpen", isChecked);
      pushParams()
    },[])

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