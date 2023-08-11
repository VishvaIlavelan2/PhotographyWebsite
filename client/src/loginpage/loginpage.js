import "./loginpage.css"
import React, { useState }  from "react";
import { Link } from "react-router-dom";


function Loginpage() {
  
  
    const [inputs, setInputs] = useState({username: "", password: ""})
    const [errorStyles, setErrorStyles] = useState({username: "black", password: "black", usernamedisplay: "hidden", passworddisplay: "hidden"})
    const [showPassword, setShowPassword] = useState({type: "password", fontFam: "'Times New Roman', Times, serif"})
    const [invalidCreds, setInvalidCreds] = useState("hidden")
   
   

    function onChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }


      function togglePassword() {
        if (showPassword.type === "password") {
            console.log(showPassword.fontFam)
            setShowPassword({type: "text", fontFam: "'Rajdhani', sans-serif"})
        } else {
            console.log(showPassword.fontFam)
            setShowPassword({type: "password", fontFam: "'Times New Roman', Times, serif"})
        }
      }
    
 
   
function onSubmit(event) {

    event.preventDefault();
    setInvalidCreds("hidden")
    const testusername = "vishva";
    const testpassword = "vikr1704"
    const usernameLength = inputs.username.length === 0;
    const passwordLength = inputs.password.length === 0;
    if (usernameLength)
    {
            setErrorStyles((values) => ({...values, username: "red", usernamedisplay: "visible"}))
    } else {
        setErrorStyles((values) => ({...values, username: "red", usernamedisplay: "hidden"}))
    }
    if (passwordLength)
    {
        setErrorStyles((values) => ({...values, password: "red", passworddisplay: "visible"}))
    } else {
        setErrorStyles((values) => ({...values, password: "red", passworddisplay: "hidden"}))
    }
    const usernameVerifications = inputs.username === testusername;
    console.log(usernameVerifications)
    const passwordVerifications = inputs.password === testpassword;

    if (usernameVerifications && passwordVerifications && !passwordLength && !usernameLength) {
        setErrorStyles((values) => ({...values, password: "black"}))
        setErrorStyles((values) => ({...values, username: "black"}))
        setInvalidCreds("hidden")
        setInputs({username: "", password: ""})
    } 

    if ((!usernameVerifications || !passwordVerifications) && !passwordLength && !usernameLength) {
        setErrorStyles((values) => ({...values, password: "red"}))
        setErrorStyles((values) => ({...values, username: "red"}))
        setInvalidCreds("visible")
    }
}      
    return (
       <div className="loginGrid">
                <div className="loginWrapper">
                    <div className="loginHeader">
                        <div className="headerText">Adminstrator Login</div>
                        <hr className="hrLogin"></hr>
                        <div className="invalidCreds" style={{visibility: `${invalidCreds}`}}>Invalid Username or Password</div>
                    </div>
                    <form className="loginForm" onSubmit={onSubmit}>
                    <div className="usernameWrapper" style={{color: `${errorStyles.color}`}}>
                   <span style = {{color: `${errorStyles.username}`}}> Username:  </span>   
                    <input  type="text" className={"usernameInput " + errorStyles.username} onChange={onChange} name="username" value={inputs.username} style={{border: `1px solid ${errorStyles.username}`}}/>
                    <span style = {{color: `${errorStyles.username}`, visibility: `${errorStyles.usernamedisplay}`}}>  Input Field Cannot Be Empty</span> 
                    </div>    
                        <div className="passwordWrapper">
                        <span style = {{color: `${errorStyles.password}`}}> Password:  </span>   
                         <input type={showPassword.type} className= {"passwordInput " + errorStyles.password} onChange={onChange} name="password"value={inputs.password} style={{border: `1px solid ${errorStyles.password}`, fontFamily: `${showPassword.fontFam}`}}/>
                
                         <span style = {{color: `${errorStyles.password}`, visibility: `${errorStyles.passworddisplay}`}} >  Input Field Cannot Be Empty</span> 
                        </div>
                    <div className="bottomLogin">
                    <div className="subWrapper">
                    <input type="submit" className="loginSubmit"/>
                    </div>
                    <div className="checkWrapper">
                    <input type="checkbox" className="toggle" onClick={togglePassword}/> 
                    </div>
                    <div className="checkLabel">Show Password</div>
                    </div>
                   
                    </form>
                    <div className="returnHome">
                        <span className="spanStyle">Reset Password</span>
                        <span> | </span>
                    <Link to="/"> <span className="spanStyle"> Return Home</span></Link>
                    </div>
                 </div>
            
       </div>
    );
};

export default Loginpage;