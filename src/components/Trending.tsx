import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Trending(){
  
    
    const [data, setData] = useState([]);
    
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
   <div id="trending" style={{display:"flex", flexWrap: "wrap", maxWidth: "calc(100vw - 250px)", overflow:"scroll"}}>
       
        {/* {arr.map((e,i)=><Cards name={e} key={i}/>)} */}
        {data.map((e,i)=><Cards name={e["thumbnail"]} title={e["title"]} key={i}/>)}
        {/* <Outlet/> */}
   </div>
    </>)
   
}