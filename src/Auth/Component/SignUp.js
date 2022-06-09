import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../UIElements/Button";
import Card from "../../UIElements/Card";
import "./Login.css"



const SignUp = () => {
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('')
    const history = useHistory();
   

    const onChangeUser = (e) => {
        setName(e.target.value)
    }
   

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    
    const onSubmitLogin = (e) => {
        e.preventDefault()
        console.log(Name,Password,Email)
        history.push("/");
    }


    return (<>
        <h1 >Thinkitive</h1>
        <Card>
        <form className="form" onSubmit={onSubmitLogin}>
            <label htmlFor="username">Username </label>
            <input type='text' name="username" id="username" onChange={onChangeUser} placeholder="Enter UserName"/><br /><br />
            <label htmlFor="password">Password    </label>
            <input type='password' name="password" id="password" onChange={onChangePassword} placeholder="Enter Password"/><br /><br />
            <label htmlFor="email">E mail </label>
            <input type='email' name="email" id="email" onChange={onChangeEmail} placeholder="Enter Email"/><br /><br />
            <Button type="submit" >Sign Up</Button>
        </form>
        </Card>
        </>
    )
}
export default SignUp;