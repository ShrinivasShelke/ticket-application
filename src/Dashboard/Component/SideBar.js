import React from "react";
import "./SideBar.css"
import { useHistory } from "react-router-dom";
import Button from "../../UIElements/Button";

const SideBar = () => {
    const history=useHistory()
    const logoutHandler=()=>{
        history.push("/")
    }
    return (
        <div className="sidebar">
            <div className="one">Project name</div>
            <div className="two">Issue</div>
            <div className="three">Profile</div>
         <Button className="five" type="submit" onClick={logoutHandler}>Logout</Button>
        </div>
    )
}
export default SideBar;