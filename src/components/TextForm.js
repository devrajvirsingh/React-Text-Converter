import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const transFormUp = () => {
    let newtxt = text.toUpperCase();
    setText(newtxt);
  };

  const transFormlw = () => {
    let newtxt = text.toLowerCase();
    setText(newtxt);
  };

  const clear = () => {
    setText(" ");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <div className=" my-3 text-center">
        <h1 className={"fw-bolder"}>Enter A Text To Transform</h1>
      </div>

      <div className="mb-3">
        <textarea
          className={`form-control bg-${
            props.darkMode === "light" ? "light" : "dark"
          } text-${props.darkMode === "dark" ? "light" : "dark"}`}
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>

        <button
          type="button"
          className="btn btn-warning my-5"
          onClick={transFormUp}
        >
          Transform To UpperCase
        </button>

        <button
          type="button"
          class="btn btn-danger my-5 mx-5"
          onClick={transFormlw}
        >
          Transform To LowerCase
        </button>

        <button type="button" class="btn btn-success mx-3 my-5" onClick={speak}>
          Click TO Listen Written Text
        </button>

        <button type="button" class="btn btn-info my-5 mx-5" onClick={clear}>
          Click To Clear The Text
        </button>
      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words & {text.length} characters</p>
      </div>

      <div className="container">
        <h2>Time taken to read these words</h2>
        <p>{ 0.008 * text.split(" ").length} minutes</p>
      </div>

      <div className="container">
        <h2>Preview Your Written Text</h2>
        <p className="fw-bold">{text.length>0?text:"Write A Text To Preview"}</p>
      </div>
    </>
  );
}
