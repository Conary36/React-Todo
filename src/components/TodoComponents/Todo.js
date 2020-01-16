import React from 'react';


const Todo = props => {


    return(
        <div onClick={event => props.toggleCompleted(props.e.id)}
        className={`e${props.e.completed ? "completed" : ""}`}
        >
            <p>{props.e.name}</p>
        </div>
    );

};

export default Todo;