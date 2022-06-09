import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../UIElements/Button";
import Card from "../../UIElements/Card";
import "./Login.css"



const Login = () => {
    const [Name, setName] = useState("");
    const [Password, setpassword] = useState('');
    const [NameError,setNameErrors]=useState('');
    const [PasswordError,setPasswordErrors]=useState('')
    const [SuccesMsg,setSuccesMsg]=useState('')
    const history = useHistory();

    const users = 
        { id: '1', username: 'admin', password: 'admin' }
    

    const onChangeUser = (e) => {
        setName(e.target.value)
        setNameErrors('')
        setSuccesMsg('')
    }
   

    const onChangePassword = (e) => {
        setpassword(e.target.value)
        setPasswordErrors('')
        setSuccesMsg('')
    }
    // console.log(Password)
    
    const onSubmitLogin = (e) => {
        e.preventDefault();
        if(Name !== ""){

        }
        else{
            setNameErrors('usermane is invalid')
        }

        if(Password !== ""){

        }
        else{
            setPasswordErrors('Password is invalid')
        }







       if(users.username===Name && users.password===Password){
        history.push("/dashboard");
       }
    //    else{
    //        alert("invalid Username or password")
    //    }
    }















    const toSignUpForm=()=>{
        history.push("/signUp");
    
    }


    return (
        <>
        
        <h1 >Thinkitive</h1>
        <Card>
            
        <form onSubmit={onSubmitLogin} className="form">
            <label htmlFor="username">Username </label>
            <input type='text' name="username" id="username" onChange={onChangeUser} placeholder="Enter UserName" value={Name}/><br /><br />
            {NameError &&<div  className="err-mesegge">{NameError}</div>}
            <label htmlFor="password">Password</label>
            
            <input type='password' name="password" id="password" onChange={onChangePassword} placeholder="Enter Password" value={Password}/><br /><br />
            {PasswordError &&<div className="err-mesegge">{PasswordError}</div>}
            <Button type='submit'>Login</Button>
            <Button type="button" onClick={toSignUpForm}>Sign Up</Button>


        </form>
        </Card>
   
        </>
    )
}
export default Login;