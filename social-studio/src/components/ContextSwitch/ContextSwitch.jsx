
import React, { useState } from "react";
import { opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8 } from "../../assets/data/contextData";
import "./ContextSwitch.css";

const ContextSwitch = () => {
  const [context, setContext] = useState(opt1);

  const handleButtonClick = (newContext) => {
    setContext(newContext);
  };

  return (
    <>
    <div className="multiple-contexts">
      <button className="contextBtn" onClick={() => handleButtonClick(opt1)}>SOCIAL LISTENING</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt2)}>ONLINE REPUTATION</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt3)}>SOCIAL CRM</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt4)}>SOCIAL ANALYTICS</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt5)}>SOCIAL PUBLISHING</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt6)}>SURVEYS & FEEDBACK</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt7)}>BI TOOLS & DASHBOARDS</button>
      <button className="contextBtn" onClick={() => handleButtonClick(opt8)}>CRISIS MANAGEMENT</button>
      <div className="contextData">
        <div className="context-detail">
          {context}
        </div>
      </div>
      </div>
    </>
  );
};

export default ContextSwitch;
