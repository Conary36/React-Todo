import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo'

const stuffTodo = [

  {
    task: 'Go to the Gym',
    id: 123,
    completed: false
  },
  {
    task: 'Drink a Gallon of Water',
    id: 1234,
    completed: false
  },
  {
    task: 'Do Squats',
    id: 12345,
    completed: false
  },
  {
    task: 'Take a shower',
    id: 123456,
    completed: false
  },
  {
    task: 'Buy some groceries',
    id: 23456,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 34562,
    completed: false
  },
  {
    task: 'Go to bed',
    id: 234561,
    completed: false
  }

];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
    todoList: stuffTodo,

    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
}

  addNewTodo = newStuffTodo => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newStuffTodo, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  //Class methods to update state
  toggleCompleted = id  => {
    //this.toggleCompleted
    console.log("index.js: App: toggleCompleted: id: ", id);
    //const newState = {...this.state}
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(e => {
        if(e.id === id) {
          return{
            ...e,
            completed: !e.completed
          };
        }
        return e;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(e =>{
        return !e.completed; //if(e.completed === false)
      })
    };
    this.setState(newState);
  }

  


  render() {
    console.log('rendering...')
    return (

      <div className='App'>

          <div className='header'>

            <h2>Welcome to your Todo App!</h2>
            <TodoForm addNewTodo={this.addNewTodo}/>

          </div>

          <TodoList
            stuffTodo={this.state.todoList}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;
