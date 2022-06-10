import React from 'react';
import "./DoneList.css"

const TodoList=(props)=>{
    return(
       <li className='donelist'>
           <div>{props.data}</div>
       </li>
    )
}

export default TodoList;