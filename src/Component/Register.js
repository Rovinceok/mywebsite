import React from 'react';
import './Css/ContactStyle.css';


const Register=()=>{
return(
<>
<h2>Login to your account</h2>
 <form className='contact'>
    <div>
         <label htmlFor='Email'>E-mail   </label>
         <input type="text"></input>
    </div>
    
    <div>
         <label htmlFor='name'>Password   </label>
         <input type="password" ></input>
    </div>
   
    <div>
    <a href ="/account"className='RR'>Don't have an account? Register</a>
        
    </div>


    <div className='btnBox'>
        <div className='btn'>
        <a href ="/home" className='readMore' >Login</a>


    </div>

    </div>


     
 </form>

</>

)
}
export default Register;