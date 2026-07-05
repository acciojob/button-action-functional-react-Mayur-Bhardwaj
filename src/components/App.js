import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let [showParagraph, setShowParagraph] = useState(false); // means don't show the paragraph.

  function show(){

  }
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={()=> setShowParagraph(true)}>Click Me</button>
      {showParagraph && 
        (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>
        )}
    </div>
  );
}

// {showParagraph && <p></p>} means if the left side is true render the right side it is called conditional rerendering.

export default App;
