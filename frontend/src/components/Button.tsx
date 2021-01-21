interface props {
  text: string;
  onClick: (e: any) => any;
}

const Button = (props: props) => {
  return (
    <button onClick={props.onClick} className="btn btn-dark">
      {props.text}
    </button>
  );
};

export default Button;
