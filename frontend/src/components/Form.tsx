import Button from "./Button";

interface PropTypes {
  label: string;
  onSubmit: (e: any) => any;
}

const onClick = (e: any): any => {
  console.log(e);
};

const Form = (props: PropTypes) => {
  return (
    <div>
      <form ref="form" onSubmit={props.onSubmit}>
        <label>{props.label}</label>
        <input type="text" name={props.label} />
        <Button type="submit" onClick={onClick} text="submit" />
      </form>
    </div>
  );
};

export default Form;
