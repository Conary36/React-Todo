// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = ({toggleCompleted, clearCompleted, stuffTodo}) => {

    return(
        <div className="things-todo">

            {stuffTodo.map(item => (
                <div><Todo 
                    key={item.id}
                    item={item}
                    toggleCompleted={toggleCompleted}
                /></div>
            ))}
            <button className='clear-btn' onClick={clearCompleted}>
                Clear Task
            </button>
        </div>
    );
};
export default TodoList;