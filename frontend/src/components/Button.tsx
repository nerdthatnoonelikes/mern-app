interface props {
  text: string;
  onClick: (e: any) => any;
  type: "submit" | "button" | "reset";
}

const Button = (props: props) => {
  return (
    <button type={props.type} onClick={props.onClick} className="btn btn-dark">
      {props.text}
    </button>
  );
};

export default Button;
