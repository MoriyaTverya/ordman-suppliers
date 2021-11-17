import React, { useState } from "react";
import axios from "axios";


export default function Login() {
        // const [name, setEmail] = useState("");
        // const [password, setPassword] = useState("");
        const [input, setInput] = useState({
            username:'',
            password:'' 
        })

        function handleChange(event) {
            const{name, value} = event.target;

            setInput(prevInput => {
                return{
                    ...prevInput,
                    [name]:value
                }
            })
        }
        function validateForm() {
          return input.username.length > 0 && input.password.length > 0;
        }
      
        function handleSubmit(event) {
          event.preventDefault();
          const newManager = {
              username: input.username,
              password: input.password
          }
          console.log(newManager);
          axios.post('http://localhost:3001/create', newManager);
        }
      
        return (
          <div className="Login">
            <form onSubmit={handleSubmit}> 
                <h1> Ordman Suppliers </h1>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>User Name</label>
                    <input onChange={handleChange} 
                    name="username"
                    value = {input.username}
                    type="text" 
                    className="form-control" 
                    placeholder="Enter user name"
                    // value={name}
                    // onChange={(e) => setEmail(e.target.value)} 
                    />

                   
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleChange} 
                    name="password"
                    value = {input.password}
                    type="password"
                    className="form-control" 
                    placeholder="Enter password"  
                //     value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block" disabled={!validateForm()}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="google.com">password?</a>
                </p>
                </form>
             </div>
        );
      }