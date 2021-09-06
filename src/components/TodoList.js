
import dusbin from '../Images/dustbin.png'
import { sendDataList } from "../Todo";
import React, {useContext} from 'react';

function TodoList(props) {

    const [toList, setToList] = useContext(sendDataList);
    const index = props.index;
    function deleteItem(){
        let x = toList.filter((e,ind) => ind !== index);
        // console.log(x);
        setToList(x);
    }

    return (
        
        <>
            <div className="todomainDiv">
                <div className="todochildDiv">
                    <h3 className="list">{props.prod}</h3>
                    <img src={dusbin} alt="delete" className="dusbin" onClick={deleteItem}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;