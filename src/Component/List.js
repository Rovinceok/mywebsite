import React from 'react';
import x from './images/1.jpg'
import '../index.css';
import './Css/ListStyle.css'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
// import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined';

const List=()=>{
return(
<>
<header>
<div className='container container-flex'>
    <div activeClassName="">
        <img class='img' src={x} alt="x"/>
    </div>

    <nav>
        <div className="list">
        <a href ="/home" className='listItems' class="Home">Home</a>
        <a href ="/about"className='listItems'activeClassName="activeItem" >About</a>
        <a href ="/contact"className='listItems'activeClassName="activeItem">Contact</a>
        <a href ="/policy"className='listItems'activeClassName="activeItem">Policy</a>
        <a href ="/services"className='listItems'activeClassName="activeItem">Services</a>
        </div>
    </nav>
    <div class="icons" >
        {/* <div class="icon"><ZoomOutOutlinedIcon/></div>
        <div class="icon"><PhoneOutlinedIcon/></div>
        <a href ="/account"className='listItems'activeClassName="activeItem"><AccountCircleIcon className='Account' /></a> */}

    </div>
</div>


</header>
</>

)
}
export default List;