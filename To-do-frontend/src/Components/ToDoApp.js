import React,{ useState } from 'react'
import ToDoList from './ToDoList';
import AuthService from '../Services/auth.service';

function ToDoApp() {
    const [todoList, setToDoList] = useState('');
    const [Items, setItems] = useState([]);
  
    const showItem = (event) => {
      setToDoList(event.target.value);
    }
  
    const showList = (event) => {
      if((event.detail===0 && event.which === 13) || event.detail!==0){
        console.log("pressed enter")
        setItems((oldItems) => {
          return [...oldItems, todoList];
        })
        setToDoList('');
      }
     
    }
  
    const deleteItems = (id) => {
      setItems((oldItems) => {
        return oldItems.filter((currEl, index) => {
          return index !== id;
        })
      })
    }
    return (
        <>
        <div className="main-container">
          <div className="todo-container">
            <h1>TO-DO LIST <span id="plus" onClick={showList} ><i className="far fa-calendar-plus"></i></span></h1>
            <input type="text" placeholder="Add Todos" onKeyPress={showList} value={todoList} onChange={showItem}></input>
            
  
            <ol>
              {Items.map( (item, index) => {
                return <ToDoList key={index} id={index} item={item} onSelect={deleteItems} />
              } )}

            </ol>
          </div>
        </div>
      </>
    )
}

export default ToDoApp
