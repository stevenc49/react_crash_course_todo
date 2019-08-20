import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import uuid from 'uuid'
import axios from 'axios'

import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {

    console.log('component mounted')

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => console.log(res))

  }

  // Toggle Complete
  markComplete = (id) => {
    

    this.setState( { todos: this.state.todos.map( (todo) => {
      if(todo.id===id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {

    return (
      <div className="App">

          <Router>
            <div className='container'>
              <Header/>

              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )} />

              <Route path="/about" component={About} />

            </div>
          </Router>
      </div>
    );
  }
}


export default App;
