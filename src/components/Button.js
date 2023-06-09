import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends Component {
  buttonRender(color) {
    return (
      <button className={`ui button ${color} fluid`}>
        {" "}
        <LanguageContext.Consumer>
          {({language}) => (language === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.buttonRender(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
