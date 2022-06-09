import React from "react"
import Done from "../List/Done";
import Inprogress from "../List/Inprogress";
import Todo from "../List/Todo";
import "./main.css"
import UserName from "./UserName";

const MainUserPage=()=>{


    const ram=[
        {id:1,title:'Done',data:"creating Ui For Login page Is Done"},
        {id:2,title:'Inprogress',data:"creating Ui For Login page Is inprogress"},
        {id:3,title:'Todo',data:"creating Ui For Login page Is Todo"}
        ]


     return(
        <>
        <div className="container">
        <div className="Users"><UserName/></div>
        <div className="UsersList">
            <div className="Done" ><Done ram={ram}/></div>
            <div className="Inprogress"><Inprogress/></div>
            <div className="Todo"><Todo/></div>
        </div>
        </div>
        </>
    )
}
export default MainUserPage;