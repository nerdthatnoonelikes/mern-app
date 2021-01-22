import Button from "./Button";

interface PropTypes {
  label: string;
}

const onClick = (e: any): any => {
  console.log(e);
};

const Form = (props: PropTypes) => {
  return (
    <div>
      <form>
        <label>{props.label}</label>
        <input type="text" name={props.label} />
      </form>
      <Button onClick={onClick} text="submit" />
    </div>
  );
};

export default Form;
