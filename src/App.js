import TaxtAreaTask from "./TextAreaTask";
import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

function App() {
  const heading = "Try To Get TextArea and Remove Tag";

  const [htmlTextArea, setHtmlTextArea] = useState("");

  const handleOnChange = (event) => {
    const doc = new DOMParser().parseFromString(
      event.target.value,
      "text/html"
    );
    const body = doc.body.lastElementChild.children;
    
    console.log(body);

    for (let x = body.length - 1; x >= 0; x--) {
      if (body.item(x).innerHTML.length > 0) break;
      if (body.item(x).innerHTML.length === 0) body.item(x).remove();
    }
    setHtmlTextArea(doc.body.outerHTML);
  };

  useEffect(() => {
    let doc = document.getElementById("FileFrame").contentWindow.document;
    doc.open();
    doc.write(`${htmlTextArea}`);
    doc.close();
  });

  return (
    <div>
      <TaxtAreaTask logo={logo} heading={heading} />;
      <div>
        <footer className="App-bottom">
          <div className="View-editable" id="gethtml">
            <textarea
              type="text"
              onChange={(event) => handleOnChange(event)}
            ></textarea>
          </div>
        </footer>
      </div>
      <iframe title="textareaTask" id="FileFrame" src="{htmlTextArea}" frameBorder="2" width="100%" height="500px"/>
    </div>
  );
}
export default App;
