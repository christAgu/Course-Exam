import React, { Component } from "react";
 
class CourseFaire extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listCourse = todoEntries.map(this.createTasks);
 
    return (
      <ul className="Course">
          {listCourse}
      </ul>
    );
  }
};
 
export default CourseFaire;