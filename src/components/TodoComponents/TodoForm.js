import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state ={
            newTodo: ""
        };
    }

    handleChanges = e => {
        //update state with each keystroke
        this.setState({...this.state, newTodo: e.target.value});
    };

    //class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    };

    render(){
        console.log('rendering form');
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChanges}
                    type="text"
                    task="e"
                    value={this.state.newTodo}
                 />
                 <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;