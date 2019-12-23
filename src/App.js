import React, { Component } from 'react';
import AddToDo from './components/AddToDo.jsx';
import ToDoList from './components/ToDoList.jsx';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './App.css';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      snackbarMsg: '',
      snackbarState: false,
      dialog: false,
      dialogToDo: '',
      todos: this.defaultToDos()
    }

  }

  defaultToDos = () => {
    return [{
      id: uuidv1(),
      status: false,
      date: '31-01-2019',
      title: 'default'
    },
    {
      id: uuidv1(),
      status: true,
      date: '1-02-2019',
      title: 'default'
    }];
  }

  // Type input field
  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  addToDo = e => {
    e.preventDefault();
    if (this.state.input) {
      // setState als functie  met concat want push it niet toegestaan
      this.setState( (state) => {
        const date = new Date();
        // Nieuw todo als object maken
        const newToDo = {
          id: uuidv1(),
          status: 0,
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

  // Show notification when user clicks out of edit text box
  // Remove after 2 seconds
  updated = () => {
      this.setState({
        snackbarMsg: 'Updated ToDo',
        snackbarState: true
      })
      setTimeout(() => {
        this.setState({
          snackbarState: false
        })
      }, 2000);
  }

  // Handle checkbox status
  handleStatus = e => {
     // Update state met nieuwe todo status
    const targetID = e.target.closest('tr').dataset.id;
     // 1. Vind index van todo item in array state.todos
    const indexArr = this.state.todos.findIndex((obj => obj.id === targetID));
    // 2. Make a array copy of the todos
    let todos = [...this.state.todos];
    // 3. Make an object copy of the item that will be mutated
    let todoStatus = {...todos[indexArr]};
    // 4. Set new value
    e.target.checked ? todoStatus = true : todoStatus = false;
    // 5. Put it back in the copy array
    todos[indexArr].status = todoStatus;
    // 6. Set state to new copy
    this.setState({
        todos: todos,
    })

  }

  updateToDo = input => {
    const targetID = input.target.closest('tr').dataset.id;
    
    // Update state met nieuwe ToDo value
    // 1. Vind index van todo item in array state.todos
    const indexArr = this.state.todos.findIndex((obj => obj.id === targetID));
    // 2. Make a array copy of the todos
    let todos = [...this.state.todos];
    // 3. Make an object copy of the item that will be mutated
    let todoTitle = {...todos[indexArr]};
    // 4. Set new value
    todoTitle = input.target.value;
    // 5. Put it back in the copy array
    todos[indexArr].title = todoTitle;
    // 6. Set state to new copy
    this.setState({
        todos: todos,
    })

  }

  // Set currentToDo as ToDo ID for the dialog
  openDialog = (e) => {
    const targetID = e.target.closest('tr').dataset.id;
    this.setState({
        currentToDo: targetID,
        dialog: true
    })
  }

  closeDialog = () => {
    this.setState({ dialog: false });
  }

  deleteToDo = (e) => {
    const targetID = e.target.parentNode.dataset.id;
    // Update state met verwijderde ToDo item
    // 1. Vind index van todo item in array state.todos
    const indexArr = this.state.todos.findIndex((obj => obj.id === targetID));

    const currTodos = this.state.todos;

    console.log('todosBeforeSplice:', currTodos);
    // 3. Remove item from array
    let  newTodos = currTodos.splice(indexArr, 1);
    console.log('todosAfterSplice:', newTodos);

    // 4. Set state to new copy
    this.setState({
        todos: newTodos,
        dialog: false
    })
  }

  render() {

    const { input } = this.state;

    return (

      <Container className="container" maxWidth="sm">

            <Paper className="paper">
              <Typography variant="h5">React ToDo List</Typography>
            </Paper>

            <Paper className="paper">
                <Grid container direction="row" justify="space-between" alignItems="center" >
                  <AddToDo value={input} placeholder={input} handleChange={this.handleChange} addToDo={this.addToDo} />
                  <Button variant="contained" color="secondary" className="btn btn-secondary">Add 5 random ToDos</Button>
                </Grid>
            </Paper>

            <Paper className="paper">
              <ToDoList 
                todos={this.state.todos} 
                handleStatus={this.handleStatus} 
                updated={this.updated} 
                updateToDo={this.updateToDo} 
                openDialog={this.openDialog}
              />
            </Paper>

            <Snackbar ref="snackbar"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              message= { this.state.snackbarMsg }
              open={ this.state.snackbarState ? true : false }
              onRequestClose= { () => { return null } } 	
            />

            <Dialog open={this.state.dialog}>
                <DialogTitle>Are you sure you want to delete this?</DialogTitle>
                <DialogContent>
                  <Button variant="contained" color="primary" onClick={this.closeDialog}>No, keep</Button>
                  <Button data-id={this.state.currentToDo} variant="contained" color="secondary" onClick={this.deleteToDo}>Yes, delete</Button>
                </DialogContent>
            </Dialog>

      </Container>
    )
  };
}

export default App;