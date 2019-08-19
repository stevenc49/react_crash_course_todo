
import React, {Component} from 'react';



class Todos extends Component {
  render() {

    console.log(this.props.todos)

    return this.props.todos.map( (todo) => (
        <h3> {todo.title} </h3>
    ))

    // return (
    //   <div>
    //       <h1> {this.props.todos[1].title} </h1>
    //   </div>
    // );
  }
}

export default Todos;
