import React, { useState } from "react";

// Components
import Form from "./components/Form";
import Button from "./components/Button";
import Post from "./components/Post";

import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const onClick = () => {
    axios("http://10.0.0.145:5000/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Twitter Implementation</h1>
      <Form />
      <br />
      <Button text="Get Posts" type="submit" onClick={onClick} />
      {posts.length > 0 &&
        posts.map((post) => (
          // @ts-ignore
          <Post message={post.message} username={post.username} />
        ))}
    </div>
  );
}

export default App;
