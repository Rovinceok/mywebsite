import React from 'react';
import './Css/HomeAbout.css';
import  Same from './Same';
import homeimg from './images/2.jpg';




const Home=()=>{
return(
<>
<Same tittle="Rovince Technosoft Limited"
text ="Rovince Technosoft Limited is a tech company which designs websites and systems"
imgsrc={homeimg}
btn="readmore"
/>
</>

)
}
export default Home;