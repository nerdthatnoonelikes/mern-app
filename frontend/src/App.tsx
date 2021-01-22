import React from "react";
import Form from "./components/Form";

const onSubmit = (e: any) => {
  console.log(e);
};

function App() {
  return (
    <div>
      <h1>Twitter Implementation</h1>
      <Form onSubmit={onSubmit} label="username" />
    </div>
  );
}

export default App;
