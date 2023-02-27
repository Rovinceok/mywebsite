import React from 'react';


const same=(props)=>{
return(
<>
<div className='mainSection'>
  <div className='contentBox'>
    <h1>{props.tittle}</h1>
    <p>{props.text}</p>
    <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >{props.btn}</a>


        </div>

    </div>
  </div>
  <div className='imgContainer'>
    <img src={props.imgsrc} alt="home"/>

  </div>


</div>
</>

)
}
export default same;