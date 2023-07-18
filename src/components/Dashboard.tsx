import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Outlet } from "react-router-dom";

export default function Dashboard(){
   
    const arr= [1,2,3];
    const [data, setData] = useState([]);
    
    // useEffect(()=>{
    //    getData();
        
    // },[])
    // const getData = async()=> {
    //     const response: any = await fetch('https://pipedapi.kavin.rocks/search?q=cricket&filter=all',{mode: "cors"});
        
            
    //         const data = await response.json();
    //         console.log(data);
    //         const items = data.items;
    //         setData(items);
    // }
    return (<>
   <div id="dashboard" style={{display:"flex", flexWrap: "wrap", maxWidth: "calc(100vw - 250px)"}}>
       
        {/* {arr.map((e,i)=><Cards name={e} key={i}/>)} */}
        {/* {data.map((e,i)=><Cards name={e["thumbnail"]} title={e["title"]} key={i}/>)} */}
        <Outlet/>
   </div>
    </>)
   
}