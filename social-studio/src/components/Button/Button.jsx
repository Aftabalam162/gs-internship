import React from "react";
import "./Button.css";

const Button = (props) => {
    return <>
        <button type="Submit" style={props.style || {}}>{props.children}</button>
    </>
}

export default Button;