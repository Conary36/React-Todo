// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);

    return(
        <div className="things-todo">
            {props.stuffTodo.map(e => (
                <Todo 
                    key={e.id}
                    e={e}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Task
            </button>
        </div>
    );
};
export default TodoList;