import React from 'react';
import "./DoneList.css"

const InProgressList=(props)=>{
    return(
       <li className='donelist'>
           <div>{props.data}</div>
       </li>
    )
}

export default InProgressList;