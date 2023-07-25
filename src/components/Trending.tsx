import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";

export default function Trending(){
  
    
    const [data, setData] = useState([]);
    const cardsRef = useRef<any>();
    //Impereative handle
    const pf = ()=>{
        
        cardsRef.current.printData();
    }
    useEffect(()=>{
       getData();
        
    },[])
    const getData = async()=> {
        const response: any = await fetch('https://pipedapi.kavin.rocks/search?q=cricket&filter=all',{mode: "cors"});
        
            
            const data = await response.json();
            console.log(data);
            const items = data.items;
            setData(items);
    }
    return (<>
   <div id="trending" style={{display:"flex", flexWrap: "wrap", maxWidth: "calc(100vw - 20%)", overflow:"scroll"}}>
       
        {/* {arr.map((e,i)=><Cards name={e} key={i}/>)} */}
        {data.map((e,i)=><Cards ref={cardsRef} name={e["thumbnail"]} title={e["title"]} key={i}/>)}
         {/* <button onClick={pf}> click</button> */}
        {/* <Outlet/> */}
   </div>
    </>)
   
}