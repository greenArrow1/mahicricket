import React, { forwardRef, Ref, useEffect, useImperativeHandle } from "react";
import './Cards.css';
 function Cards (props: any, ref: Ref<any>){

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
    useImperativeHandle(ref,()=>({
        printData : ()=>{
            console.log("printed")
        }
    }))
   
    return (
        <>
            <div itemID="CardContainer" style={cardsStyle} className="CardContainer" >
               <p style={{margin:"1rem",textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"}}>
               {props.title}
               </p>
            </div>
        </>
    )
    
}
export default forwardRef(Cards)