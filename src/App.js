import React from 'react';
import{BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Policy from './Component/Policy';
import Services from './Component/Services';
import Error from './Component/Error';
import List from './Component/List';
import Footer from './Component/Footer';
import Account from './Component/Account';
import Register from './Component/Register';

const App=()=>{
 return(
  <>
  <List/>
  <BrowserRouter>
    <Routes>
            <Route  path="/home" element={<Home/>}/>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/policy" element={<Policy/>}/>
            <Route  path="/services" element={<Services/>}/>
            <Route  path="/error" element={<Error/>}/>
            <Route  path="/account" element={<Account/>}/>
            <Route  path="/register" element={<Register/>}/>

    </Routes>

   </BrowserRouter>
   <Footer/>
   </>
 );

}
export default App;