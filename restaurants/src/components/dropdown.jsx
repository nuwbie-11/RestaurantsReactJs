export default function Dropdowns(props) {
  // console.log(props.Choices)

  return (
    <div className="dropdown-wrapper border-b-2 border-sky-300">
      <select
        name={props.name}
        id={props.name}
        // value={props.value}
        onChange={props.handler}
        className="border-0 w-full"
        onLoad={props.handler}
      >
        {props.Choices.map((item, ix) => (
          ix === 0 ? (
            <option value={ix} key={ix} selected={true}>{item === "" ? `All ${props.name}` : item}</option>
          ):
          <option value={ix} key={ix}>{item}</option>
        ))}
      </select>
    </div>
  );
}
