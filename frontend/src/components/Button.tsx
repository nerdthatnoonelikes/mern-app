interface props {
  text: string;
  onClick?: (e: any) => any;
}

const Button = (props: props) => {
  return (
    <button type="submit" onClick={props.onClick} className="btn">
      {props.text}
    </button>
  );
};

export default Button;
