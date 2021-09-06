
import TodoList from './components/TodoList';
import toIcon from './Images/to-do-list.png'
import React, { createContext, useEffect, useState } from 'react';

const getLocalItems = () => {
  let list = JSON.parse(localStorage.getItem('lists'));
  if(list){
    return list;
  }
  else{
    return [];
  }
}


let sendDataList = createContext();

function Todo(){

    const [todo, setTodo] = useState("");
    const [toList, setToList] = useState(getLocalItems());

    function newInput(event){
      setTodo(event.target.value)
    }

    function addToList(){
      let x = [...toList, todo];
      console.log(x);
      setToList(x);
      setTodo(''); 
    }

    useEffect(() => { 
      let lst = JSON.stringify(toList);
      localStorage.setItem('lists', lst);
    },[toList]);

    return(
      <>
        <section className="myTodo">
            <div className="mainDiv">
                <div className="childDiv">
                    <img src={toIcon} alt="icon" className="icon"/>
                    <div className="userInput">
                      <input type="text" className="inputext" value={todo} onChange={newInput}/>
                      <h1 className="addIcon" onClick={addToList}>+</h1>
                    </div>
                </div>
            </div>
            <div className="todoList">
              <sendDataList.Provider value={[toList, setToList]} >
              {
                toList.map((value, index) => <TodoList key={index} prod={value} index={index}/>)
              }
              </sendDataList.Provider>
            </div>
        </section>
      </>
    );
}


export default Todo;
export {sendDataList};