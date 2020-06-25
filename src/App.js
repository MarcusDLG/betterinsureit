import React from "react";
//import logo from "./logo.svg";
import "./App.scss";
import Dropdown from "./Dropdown";

// This will be replaced with info from Cloudinary
const items = [
  {
    id: 1,
    value: "Speak to a Professional",
  },
  {
    id: 2,
    value: "Life Insurance",
  },
  {
    id: 3,
    value: "Vision Insurance",
  },
];

function App() {
  return (
    <>
      <div className="header">
        <div className="App">
          <header className="App-header">
            <img src="BetterInsureItLogoSize.png" alt="logo" />
            <p>Better Insure IT</p>
          </header>
        </div>
        <div>
          {/* Take out multiSelect for only one choice */}
          <Dropdown title="Individuals & Families" items={items} multiSelect />
        </div>
      </div>
    </>
  );
}

export default App;
