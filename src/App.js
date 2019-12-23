import React, { Component } from 'react';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import AddToDo from './components/AddToDo.jsx';
import ToDoList from './components/ToDoList.jsx';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      input: '',
      todos: []
    }

  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
    console.log(this.state.todos);
  }

  addToDo = e => {

    e.preventDefault();

    if (this.state.input) {

      // setState als functie  met concat want push it niet toegestaan
      this.setState( (state) => {

        const date = new Date();

        // Nieuw todo als object maken
        const newToDo = {
          date: date.toLocaleDateString(),
          title: state.input,
        }
        const todos = state.todos.concat(newToDo);

        // State updaten door nieuwe state object te returnen
        return {
          todos,
          input: 'Add a new ToDo'
        };

      });

    }

  };

  render() {

    const { input } = this.state;

    return (
      <div className="App">

        <Navbar />

        <main role="main" className="container">
          <div className="starter-template">

            <h1>{input}</h1>

            <AddToDo value={input} placeholder={input} handleChange={this.handleChange} addToDo={this.addToDo} />

            <button className="btn btn-secondary">Add 5 random ToDos</button>

            <hr/>

            <h2>ToDo list</h2>
            
            <ToDoList todos={this.state.todos} />

          </div>
        </main>

      </div>
    )
  };
}

export default App;