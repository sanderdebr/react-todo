import React, { Component } from 'react';
import AddToDo from './components/AddToDo.jsx';
import ToDoList from './components/ToDoList.jsx';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
          input: ''
        };

      });

      // Maak input veld weer leeg
      document.querySelector('input').value = '';

    }

  };

  render() {

    const { input } = this.state;

    return (
      <Container className="container" maxWidth="sm">

            <Paper className="paper">
              <Typography variant="h4">React ToDo List</Typography>
              <Typography className="subtitle" variant="h5">{input}</Typography>
            </Paper>

            <Paper className="paper">
                <Grid container direction="row" justify="space-between" alignItems="center" >
                  <AddToDo value={input} placeholder={input} handleChange={this.handleChange} addToDo={this.addToDo} />
                  <Button variant="contained" color="primary" className="btn btn-secondary">Add 5 random ToDos</Button>
                </Grid>
            </Paper>

            <Paper className="paper">
              <h2>ToDo list</h2>
              <ToDoList todos={this.state.todos} />
            </Paper>

      </Container>
    )
  };
}

export default App;