import logo from './logo.svg';
import './App.css';
import React from 'react';

import {todos} from './todos.json';
import TodoForm from './components/todoForm';

function App() {

  const [state, setState] = React.useState({todos});

  const handleAddTodo = (todo) =>{
    setState({
      todos: [...state.todos,todo]
    })
  }

  const handleRemove = (index) => {
    if(window.confirm('Are you sure you want to delete it?')){
      setState({
        todos: state.todos.filter((e, i)=> {
          return i !== index
        })
      });
    }
  }

  const tasks = state.todos.map((todo, i) => {
    return (
      <div key={i} className="col-md-4">
        <div className="card mt-4">
          <div className="card-header" >
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p><mark>{todo.responsible}</mark></p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={handleRemove.bind(this, i)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  });
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="." className="text-white">
            Tasks
            <span className="bagde badge-pill badge-light ml-2">{state.todos.length}</span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={handleAddTodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
