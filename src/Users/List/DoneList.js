import React from 'react';
import "./DoneList.css"

const DoneList=(props)=>{
    return(
       <li className='donelist'>
           <div>{props.data}</div>
       </li>
    )
}
export default DoneList;