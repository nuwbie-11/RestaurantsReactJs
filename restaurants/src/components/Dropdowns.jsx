import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Dropdowns = (props) => {
  const [value, setValue] = React.useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const urlSearchParams = new URLSearchParams(location.search);

  const handleChanges = (event) => {
    setValue(event.target.value);
    // console.log(value);
  };

  const pushParams = () => {
    let cateValue = urlSearchParams.get("cate");
    let priceValue = urlSearchParams.get("price");
    let statsValue = urlSearchParams.get("isOpen");

    
    switch (props.from) {
      case "cate":
        cateValue = props.options[value];
        break;
        case "price":
          priceValue = props.options[value];
        break;

      default:
        break;
    }
      urlSearchParams.set("cate", cateValue);
      urlSearchParams.set("isOpen", statsValue);
      urlSearchParams.set("price", priceValue);
    navigate({
      pathname: "/",
      search: `?${urlSearchParams.toString()}`,
    });
  };

  React.useEffect(() => {
    urlSearchParams.set("price", "undefined");
  },[]);

  React.useEffect(() => {
    pushParams();
  }, [value]);

  return (
    <div className="dropdown-wrapper border-b-2 border-sky-300">
      <select
        className="border-0"
        name="prices"
        id={props.id}
        value={value}
        onChange={handleChanges}
      >
        <option value="" disabled>
          {props.default["default"]}
        </option>
        {Object.keys(props.options).map((key) => (
          <option value={key}>{props.options[key]}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;
