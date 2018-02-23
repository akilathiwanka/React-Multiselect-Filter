import React, { Component } from 'react';

export default class TodoItem extends Component {
   render() {
      return (
         <li className="todo-item">
            <span className="item-name" >{this.props.item}</span>
            <span className="item-remove" onClick={this.handleChange}> x </span>
         </li>
      )
   }

   handleChange = () => {
      this.props.onDelete(this.props.item)
   };

}