import React from "react";
import "./App.css";

import Form from "./components/Form";

const App = () => {
  return (
    <div className="border w-2/3 h-screen m-auto">
      <section className="text-center mt-20">
        <div className="text-xl">Create an account</div>
      </section>
      <Form />
    </div>
  );
};

export default App;
