import TaxtAreaTask from "./TextAreaTask";
import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

function App() {
  const heading = "Try To Get TextArea and Remove Tag";

  const [htmlTextArea, setHtmlTextArea] = useState("");

  const handleOnChange = (event) => {
    setHtmlTextArea(event.target.value);
  };

  useEffect(() => {
    let parser = new DOMParser();
    let doc = parser.parseFromString({ htmlTextArea }, "text/html");
    let doc_2 = JSON.stringify(doc);

  });

  // Todo:

  return (
    <div>
      <TaxtAreaTask logo={logo} heading={heading} />;
      <div>
        <footer className="App-bottom">
          <div className="View-editable" id="gethtml">
            <textarea
              type="text"
              value=""
              onChange={(event) => handleOnChange(event)}
            ></textarea>
          </div>
        </footer>
      </div>
      <p>{htmlTextArea}</p>
      <iframe src={htmlTextArea}
        width="1450px"
        height="450px"
        display="initial"
        position="relative"
      />
    </div>
  );
}
export default App;
