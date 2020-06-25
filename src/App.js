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
            {/* multiSelect */}
            {/* <Dropdown title="Individuals & Families" items={items} multiSelect /> */}
            <Dropdown title="Individuals & Families" items={items} />
            <Dropdown title="Business Owners" items={items} />
            <Dropdown title="Turning 65+" items={items} />
            <Dropdown title="Planning and Guidance" items={items} />
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
