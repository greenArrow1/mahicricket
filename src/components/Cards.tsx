import React, { useEffect } from "react";
import './Cards.css';
export default function Cards(props: any){

   useEffect(()=>{

   },[])
   //const url = props.name.to
   console.log(  props.name)
    const cardsStyle = {
        // background: "#ffffff",
        display: "inline-flex",
        width: "250px",
        height: "232px",
        boxShadow: "grey 1px 1px 10px 0.4px",
        margin: "1rem",
        alignItems: "end",
        justifyContent: "center",
        backgroundImage : `url(${props.name})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain"
       
    };
    
    return (
        <>
            <div itemID="CardContainer" style={cardsStyle} className="CardContainer" onClick={()=>{}}>
               <p style={{margin:"1rem",textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"}}>
               {props.title}
               </p>
            </div>
        </>
    )
}