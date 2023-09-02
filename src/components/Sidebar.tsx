import React from 'react';
import { NavLink } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar(){
    // return <div style={{
    //     justifyContent: "center",
    //     display: "flex",
    //     alignItems: "center",
    //     borderRight: "1px solid green",
    //     width: "250px"
    
    // }}>

return <nav id="sidebar" style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        borderRight: "1px solid green",
        width: "30%"
    
    }}>
<section>
<NavLink to="/login" >LogIn/Sign-IN</NavLink>
  <NavLink to="/cricket" >Cricket</NavLink>
  {/* <NavLink to="/messages" ></NavLink> */}
  <NavLink to="/trending" >Trending</NavLink>
</section>
 
</nav>

}