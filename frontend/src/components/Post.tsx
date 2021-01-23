interface proptypes {
  username: string;
  message: string;
}

const Post = (props: proptypes) => {
  return (
    <div className="post">
      <br />
      <h3>User: {props.username}</h3>
      <h4>{props.message}</h4>
      <br />
    </div>
  );
};

export default Post;
