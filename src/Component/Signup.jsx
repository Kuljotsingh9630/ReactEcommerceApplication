import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Component/Signup.css';


const Signup =()=>
    {
        return(
      <>
      <div className="container">
      <form className="form-Group" action="Login.jsx">
         <h3 className="Signup-start">Signup</h3>
      
            
                <label> <i class="fa-solid fa-user"></i></label>
                <input type="text" placeholder="Your Name" id="name" required/><br/>
                <label> <i class="fa-solid fa-envelope"></i></label>
                <input type="email" placeholder="Your Email" id="email" required/><br/>
                <label><i class="fa-solid fa-lock"></i></label>
                <input type="password" placeholder="Enter Your Password" id="password" required/><br/>
                <label><i class="fa-solid fa-lock-open"></i></label>
                <input type="text" placeholder="Comform Your Password" id="password" required/><br/>
                <input className="form-check-input" type="checkbox" required/>
                <span className="term">Accept All Term And Condition</span> <br/>
                <button type="submit" className="btn btn-primary btn1">Signup</button>
               <a href="Login.jsx"><button type="button" className="btn btn-primary btn2">Login</button></a>
            </form>
         </div>
         
         
      </> 
    ); 
    }
    export default Signup;
    