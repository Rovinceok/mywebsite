import React from 'react';
import './Css/ContactStyle.css';



const Account=()=>{
return(
<>
<h1>My account</h1>
<h2>Create your account</h2>
 <form className='contact'>
    <div>
         <label htmlFor='Email'>E-mail   </label>
         <input type="text"></input>
    </div>
    <div>
         <label htmlFor='Full name'>Full Name   </label>
         <input type="text"></input>
    </div>
    <div>
         <label htmlFor='name'>Phone Number   </label>
         <input type="text" ></input>
    </div>
    <div>
         <label htmlFor='Password'>Password   </label>
         <input type="password" ></input>
    </div>
    <div>
         <label htmlFor='Password'> Confirm Password   </label>
         <input type="password"></input>
    </div>

    <div>
    <a href ="/register"class="RR">Already have an account? Login</a>
        
    </div>

    <div className='btnBox'>
        <div className='btn'>
        <a href ="/home" className='readMore' >Submit details</a>


        </div>

    </div>

     
 </form>

</>


)
}
export default Account;