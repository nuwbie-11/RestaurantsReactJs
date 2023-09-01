import React from "react";
import { Link,useNavigate,useLocation } from 'react-router-dom';


const Dropdowns = (props) => {
  const [value, setValue] = React.useState("default");
  const location = useLocation();
  const navigate = useNavigate();

  const handleChanges = (event) => {
    setValue(event.target.value);
    // console.log(value);
  };

  // const queryParam = urlSearchParams.get(props.from);
  
  const pushParams=()=>{
    const urlSearchParams = new URLSearchParams(location.search);

    urlSearchParams.append('cate',props.options[value]);
    urlSearchParams.append('isOpen',false);
    urlSearchParams.append('price','$');

    console.log(urlSearchParams);
    
    // navigate({
    //   pathname:"/",
    //   search :
    // }
    // )

  }
  

  React.useEffect(()=>{
    // console.log(value);
    // navigate({
    //   pathname: "/",
    //   search: `?${props.from}=${props.options[value]}`,
    // })

    pushParams();
  },[value]);



  return (
    <div className="dropdown-wrapper border-b-2 border-sky-300">
      <select
        className="border-0"
        name="prices"
        id={props.id}
        value={value}
        onChange={handleChanges}
      >
        <option value="default" disabled>
          {props.default["default"]}
        </option>
        {Object.keys(props.options).map((key) => (
          <option value={key}>
            {props.options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
