import React from "react"
import Button from "./Button"
import "./Modal.css"

const Modal=({closeModal})=>{
    const submithandler=()=>{
    }
   return(<>
    <div className="modelBackGround">
        <div className="modelContainer">
            <div className="titleClose">
            <button onClick={()=>{closeModal(false)}}>x</button></div>
            <div className="title">
                <h1>Create Ticket</h1>
            </div>
            <div className="body">
                <form onSubmit={submithandler}>
                <label htmlFor="name">User Name </label>
                <input type='text'  id="name"  placeholder="Enter User Name"/><br /><br />
                <label htmlFor="description" >Description</label>
                <input  id="description" placeholder="Enter Description" /><br /><br />
                    <Button type='submit' >Submit</Button>
                    <Button type="button" onClick ={()=>{closeModal(false)}}>Cancel</Button>
                </form>
            </div>
        </div>
    </div>
    </>)
}
export default Modal