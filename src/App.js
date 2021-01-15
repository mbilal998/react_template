import TaxtAreaTask from "./TextAreaTask";
import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

function App() {
  const heading = "Try To Get TextArea and Remove Tag";

  const [htmlTextArea, setHtmlTextArea] = useState("");

  const handleOnChange = (event) => {
    const text_1 = JSON.stringify(event.target.value);
    const text_2 = "<h1>This is a Heading</h1>\n<p>This is a paragraph.</p><p></p>".endsWith('<p></p>');
    //const text_2 = text_1.endsWith("<p></p>");
    console.log(text_2);
    let text_3;
    if (text_2) {
      text_3 = text_1.replace(/<[^/>][^>]*><\/[^>]+>/, "");
    }
    setHtmlTextArea(text_3);
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
              value=""
              onChange={(event) => handleOnChange(event)}
            ></textarea>
          </div>
        </footer>
      </div>
      <iframe
        id="FileFrame"
        src="{htmlTextArea}"
        frameBorder="0"
        width="100%"
        height="500px"
      />
    </div>
  );
}
export default App;
