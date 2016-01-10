import React from "react";
import ReactDOM from "react-dom";
import CheckboxWithLabel from "./components/CheckboxWithLabel";

var root = document.getElementById("root");

ReactDOM.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />, root);
