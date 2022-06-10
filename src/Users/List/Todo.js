import React from "react";
import TodoList from "./TodoList";

const Todo=(props)=>{
    const data=props.completed;
    const ramData= data.filter((data) => {
        return (data.title === "Todo")
    })
    return(
        <>
        <h3>Todo</h3>
        <ul>
            {ramData.map((data)=><TodoList key={data.id} id={data.id} title={data.title} data={data.data}/>)}
        </ul>
        </>
    )
}
export default Todo;