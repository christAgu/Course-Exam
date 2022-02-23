import React, { Component } from "react";
import  CourseFaire from "./CourseFaire.js";
 


class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
          };
     
        this.addItem = this.addItem.bind(this);
      }

      addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          console.log(this.state.items);
             
          e.preventDefault();
          
          
          
 
    }


    






  render() {
    return (

    
      <div className="CourseMain">
        <div className="header">
        <form onSubmit={this.addItem}>
            
            <input ref={(a) => this._inputElement = a}
             placeholder="Ajouter une course">
            </input>
            
            <button type="submit">Ajouter</button>
          </form>
        </div>
        <CourseFaire entries={this.state.items}/>
      </div>
    );
  }
}
 
export default Course ;