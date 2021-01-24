interface props {
  text: string;
  onClick?: (e: any) => any;
  onSubmit?: (e: any) => any;
  type?: "submit" | "button";
}

const Button = (props: props) => {
  return (
    <button
      type={props.type}
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      className="btn"
    >
      {props.text}
    </button>
  );
};

export default Button;
