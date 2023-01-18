import Admina from "../../admin";
import Sidenav from "../sidenav";
import React, {useEffect, useState } from 'react'
import axios from 'axios'



function Links () {
    const [data,setData] = useState([])
    useEffect(() => {
      showData();
  }, [])
  
    const showData = () => {
    axios.get("http://localhost:5000/links/").then((response) => {
     setData(response.data)
    
  
  })
    }
    return(
        <div className="w-[100%] flex ">
            <div className="w-[20%]"><Sidenav /></div>
            <div className="w-[80%] mt-20">
            <table className="border-2 border-black">
              
              <tr className="border-2 border-black ">
                <th>Name</th>
                <th>Link</th>
                
              </tr>
              {
      
      data.map((data)=>{
      
        return (
              <tr className="border-2 border-black ">
              <td className="border-2 border-black w-40">{data.name}</td>
                <td className="border-2 border-black w-80">{data.link}</td>
                <td className="border-2 border-black w-20"><img src={data.logo} alt="" className="w-20 h-20 p-4"></img></td>
                
              </tr>
      
            
      
                )
      
              })
      
              
            
            
      
            }
      
      </table>
      
            </div>

        </div>
    )
}

export default Links;