import React, { useState } from "react";
import Modal from "../../UIElements/Modal";
import "./UsersBar.css"

const UsersBar=()=>{
    const [openModal,setModal]=useState(false);

    return(
        <>
        <div className="userBar">
            <button type="Submit" classname="button" onClick={()=>{setModal(true)}}>Create</button>
            {openModal &&<Modal   closeModal={setModal}/>}
        </div>
        </>
    )
}
export default UsersBar;