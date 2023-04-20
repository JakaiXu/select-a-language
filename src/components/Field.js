import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
export class Field extends Component {
  static contextType = LanguageContext
  render() {
    
    const text =this.context.language === 'english' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label className="ui orange basic label">{text}</label>
        <div className="ui input focus">
          <input type="text" placeholder="Search Language" />
        </div>
      </div>
    );
  }
}

export default Field;
