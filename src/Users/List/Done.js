import React from "react";
import DoneList from "./DoneList";

const Done=(props)=>{
    const data=props.ram;
   
    return(
        <>
        <h3>Done</h3>
        <ul>
            {data.map((data)=><DoneList key={data.id} id={data.id} title={data.title} data={data.data}/>)}
        </ul>
        </>

    )
}
export default Done;