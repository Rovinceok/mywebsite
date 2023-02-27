import React from 'react';
// import homeimg from './images/2.jpg';
import webimage from './images/10.jpg';
import Gimg from './images/G.jpg'
import Himg from './images/12.jpg'
import Oimg from './images/o.jpg'
import Net from './images/Nett.jpg'
import Full from './images/Full.jpg'
import Database from './images/Data.jpg'



import './Css/ServiceStyle.css';

const Card=()=>{
return(
<>
<div className="Cards">
<div className="Card">
<div className='card'>
       <h2>Web development</h2>
       <img src={webimage} alt="service1"  className='img1'/>
       <p>We design great websites at an affordable prices. Get in touch with us
        to get our services
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >learn...</a>


        </div>

    </div>

    
    </div>


    <div className='card'>
       <h2>Web hosting</h2>
       <img src={Himg} alt="service1"  className='img1'/>
       <p>Affordable hosting services are now available, contact us now and
        get your preferred hosting plan.
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >Send request</a>


        </div>

    </div>

    
    </div>

    <div className='card'>
       <h2>Graphics Design</h2>
       <img src={Gimg} alt="service1"  className='img1'/>
       <p>We offer graphics design and our team are always 
        ready to help our clients at good as possible
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >learn...</a>


        </div>

    </div>

    
    </div>

    <div className='card'>
       <h2>Online Training</h2>
       <img src={Oimg} alt="service1"  className='img1'/>
       <p>Wed design and development sessions are now available, affordable and convenient,
        apply today and get in touch with us
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >Apply now</a>


        </div>

    </div>

    
    </div>

    <div className='card'>
       <h2>Networking</h2>
       <img src={Net} alt="service1"  className='img1'/>
       <p> IP addressing, Domain Name System (DNS),
         primary domain email service, Internet access, web content filtering.
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >order</a>


        </div>

    </div>

    
    </div>

    <div className='card'>
       <h2>Full stack development</h2>
       <img src={Full} alt="service1"  className='img1'/>
       <p> End-to-end application software development, including the front end and back end.
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >Send request</a>


        </div>

    </div>

    
    </div>

    <div className='card'>
       <h2>Database Administration</h2>
       <img src={Database} alt="service1"  className='img1'/>
       <p>Security and integrity of data stored in the database is well upheld.
       </p>
       <div className='btnBox'>
        <div className='btn'>
        <a href ="/about" className='readMore' >Contact us</a>


        </div>

    </div>

    
    </div>



    </div>
    </div>
</>

)
}
export default Card;