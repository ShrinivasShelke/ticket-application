import React from "react";
import SideBar from "./SideBar";
import './Dashboard.css'
import UsersBar from "./UsersBar";
import MainUserPage from "../../Users/Component/MainUserpage";

const Dashboard = () => {
    return (
    <>
    <div className="main-header"><UsersBar/></div>
    <main>
    <div className="dashBoard">
    <div className="SideBar_comp">
    <SideBar/>
    </div>
    <div className="two">
        <MainUserPage/>
    </div>
   
    </div>
    </main>
    </>)
}

export default Dashboard 