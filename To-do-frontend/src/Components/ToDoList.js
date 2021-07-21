import React from 'react'

function ToDoList(props) {

    
    return (
        <>
            <div className="todo-items">                     
                <li><span><i className="fas fa-trash-alt" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id);
                    }}></i></span> {props.item} </li>
            </div>
        </>
    )
}

export default ToDoList
