import React, { useState }  from "react";
import Header from "../header/header.js";
import "./contact.css"
function Contact() {
    const [inputs, setInputs] = useState({firstname: "", lastname: "", message: "", email: ""});
    const [emptyerror, setEmptyError] = useState({header: "80px", error: "none", msg: "All Input Fields Must Be Completed", color: "red"});
    const [emailerror, setEmailError] = useState({border: "1px solid black", color: "black"})

    function validateEmail (email) {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
      }

    function onChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
       


    }
    async function  onSubmit(event) {
        const firstname = inputs.firstname;
        const lastname = inputs.lastname;
        const email = inputs.email;
        const message = inputs.message;
        event.preventDefault();
         
        if (firstname.length === 0 || lastname.length === 0 || email.length === 0 || message.length === 0)
        {
            setEmailError({border: "1px solid black", color: "black"});
            setEmptyError({header: "40px", error: "block", msg: "All Input Fields Must Be Completed", color: "red"});
        } else {
            if (email.indexOf("@") === -1 || !validateEmail(email)) {
                setEmailError({border: "1px solid red", color: "red"});
                setEmptyError({header: "40px", error: "block", msg: "Email Address is Not Valid", color: "red"});
            } else {
                setEmptyError({header: "80px", error: "none"});
                setEmailError({border: "1px solid black", color: "black"});
        ;
                const options = {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                    };
            const response = await fetch("/api/contactsend/", options)
            const parsed = await response.json();
            if (parsed.emailResult === true) {
                setEmptyError({header: "40px", error: "block", msg: "Message Sent, Expect Reply to Given Email", color: "green"});
                setInputs(({firstname: "", lastname: "", message: "", email: ""}))
            } else {
                setEmptyError({header: "40px", error: "block", msg: "Message Failed to Send", color: "red"});
                
            }
            }
        
        }

       
    }
    return (
        <div className="contactGrid">
            <Header />
            <div className="formHeader">
                <div className="formHeaderWrapper" style={{marginTop: `${emptyerror.header}`}}>
                        Contact 
                        <br></br>
                        <div className="headerDescriptionWrapper">
                           For business, licensing, or general inquiries. 
                           
                           <div className="notfinished" style={{display: `${emptyerror.error}`, backgroundColor: `${emptyerror.color}`}}>
                    <span >{emptyerror.msg}</span>
                    </div>
                         
                        </div>
                        
                        <div className="hrWrapper">
                        <hr />
                        </div>
            
                </div>
            </div>
            <div className="form" onSubmit={onSubmit}>
            <form>
                <div className="formGrid">
                <div className="firstName">
                    First Name: 
                    <input type="text" className="firstInput" onChange={onChange} name="firstname" value={inputs.firstname}/>
                </div>
                <div className="lastName">
                    Last Name:
                     <input type="text" className="secondInput" onChange={onChange} name="lastname" value={inputs.lastname}/>
                </div>
                <div className="message">
                    Message:
                     <textarea type="text" className="thirdInput" onChange={onChange} name="message" value={inputs.message}/>
                </div>
                <div className="email" style={{color: `${emailerror.color}`}}>
                    Email:
                      <input type="text" className="fourthInput" onChange={onChange} name="email" value={inputs.email} style={{border: `${emailerror.border}`}}/>
                </div>    
                <div className="second">
                    <hr />
                    <input type="submit" className="submitbtn"/>
                    
                   
                </div>
                                   
                          
                </div>
            </form>
            </div>
        </div>
        
    );
};

export default Contact;