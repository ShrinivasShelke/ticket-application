import React from "react";
import InProgressList from "./InProgressList";

const Inprogress=(props)=>{
    const data=props.completed;
    const ramData= data.filter((data) => {
        return (data.title === "Inprogress")
    })
    return(
        <>
        <h3>Inprogress</h3>
        <ul>
            {ramData.map((data)=><InProgressList key={data.id} id={data.id} title={data.title} data={data.data}/>)}
        </ul>
        </>
)
}
export default Inprogress;