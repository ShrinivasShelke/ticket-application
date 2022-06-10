import React, { useState } from "react"
import Done from "../List/Done";
import Inprogress from "../List/Inprogress";
import Todo from "../List/Todo";
import "./main.css"
import UserName from "./UserName";

const MainUserPage = () => {
    const[completed,setCompleted]=useState([])

    const onRamDataHandler = (previous) => {
        setCompleted(previous)
    }
    const onShyamDataHandler=(previous)=>{
         setCompleted(previous)
    }  
    const onKrishnaDataHandler=(previous)=>{
        setCompleted(previous)
    }  
    
    return (
        <>
            <div className="container">
                <div className="Users" ><UserName onRamData={onRamDataHandler} shyamData={onShyamDataHandler} krishnaData={onKrishnaDataHandler}/></div>
                <div className="UsersList">
                    <div className="Todo"    ><Todo completed={completed}/></div>
                    <div className="Inprogress"><Inprogress completed={completed} /></div>
                    <div className="Done" ><Done completed={completed}/></div>
                </div>
            </div>
        </>
    )
}
export default MainUserPage;