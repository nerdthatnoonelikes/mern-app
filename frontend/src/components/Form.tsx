import { useState } from "react";
import Button from "./Button";
import fetch from "node-fetch";

const Form = () => {
  const [formState, setFormState] = useState({ userName: "", userMessage: "" });
  const changeHandler = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const body = {
    message: formState.userMessage,
    username: formState.userName,
  };

  const submitHandler = async (e: any) => {
    await fetch("http://10.0.0.145:5000/api/newpost", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => console.log("request sent"));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        User Name:
        <input
          type="text"
          name="userName"
          value={formState.userName}
          onChange={changeHandler}
        />
      </label>
      <br />
      <br />
      <label>
        Message:
        <textarea
          name="userMessage"
          value={formState.userMessage}
          onChange={changeHandler}
        />
      </label>
      <br />
      <Button text="submit" />
    </form>
  );
};

export default Form;
