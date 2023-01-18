import Admina from "../../admin";
import Sidenav from "../sidenav";
import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup';
import {  useNavigate ,useParams} from "react-router-dom";



function Newadmin () {

    const [id, idchange] = useState("");
    const [username, namechange] = useState("");
    const [password, feedchange] = useState("");

    const { empid } = useParams();

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, username, password };
       
        fetch("http://localhost:5000/admin", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            alert('Admin added')
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        });
    }

    const remove = (id) => {
       
        fetch("http://localhost:5000/admin/" +id, {
            method: "DELETE"
        }).then((res) => {
            alert('Admin Removed')
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        });
    }

    const edit = (id) => {

        const empdata={id,username,password};
       
        fetch("http://localhost:5000/admin/" +empid, {
            method: "PUT",
            headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
        }).then((res) => {
            alert('Username changed')
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        });
    }

    useEffect(()=>{
        fetch("http://localhost:5000/admin/" + id).then((res)=>{
            return res.json()
        }).then((resp)=>{
            idchange(resp.id);
            namechange(resp.username);
            feedchange(resp.password);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    

    const [data,setData] = useState([])
    useEffect(() => {
      showData();
  }, [])
  
    const showData = () => {
    axios.get("http://localhost:5000/admin/" + id).then((response) => {
     setData(response.data)
    
  
  })
    }
    return(
        <div className="w-[100%] flex">
            <div className="w-[20%]"><Sidenav /></div>
            <div className="w-[80%] mt-20">
                <Popup trigger={<button className="border-2 border-black p-2 m-4 bg-black text-white" >Add new admin+</button>
         }>

                <div className="border-black border-2 h-80 w-80 mx-auto bg-white text-center">
        <div className="grid text-center">
            <input type="text" placeholder="Enter Username" className="border-2 border-black p-2 m-2" value={id} onChange={e => idchange(e.target.value)} ></input>
            <input type="text" placeholder="Re-Enter Username" className="border-2 border-black p-2 m-2" value={username} onChange={e => namechange(e.target.value)} ></input>
           
            <input type="password" placeholder="Enter password" className="border-2 border-black p-2 m-2"  value={password} onChange={e => feedchange(e.target.value)}></input>
            
            <button className="border-2 border-black w-30 mx-auto p-2 m-2  " onClick={handlesubmit}>Add Admin</button>
            
        
        </div>
        </div>
                </Popup>
                   <table className="border-2 border-black m-4" >
                    <thead>
              
              <tr className="border-2 border-black ">
                <th>Admins</th>
                <th className="border-2 border-black "></th>
                
                
              </tr>
              </thead>
              <tbody>
              {
      
      data.map((data)=>{
      
        return (
            
              <tr className="border-2 border-black " key={data.id}>
             
                <td className="border-2 border-black w-80">{data.username}</td>
                <td className="border-2 border-black w-20">
                    
                    

                <Popup trigger={<button className="border-2 border-black p-2 m-4 bg-black text-white" >Edit</button>
         }>

                <div className="border-black border-2 h-80 w-80 mx-auto bg-white text-center">
        <div className="grid text-center">
            <input type="text" placeholder="Enter Username" className="border-2 border-black p-2 m-2" value={username} onChange={e => namechange(e.target.value)} ></input>
            <input type="text" placeholder="Enter password" className="border-2 border-black p-2 m-2"  value={password} onChange={e => feedchange(e.target.value)}></input>
            
            <button className="bg-black rounded-l p-2 text-white" onClick={edit}>Edit</button> 
        </div>
        </div>
                </Popup>
                    
                    
                    
                    
                    
                    </td>
                    <td className="w-20 p-2"><button className="bg-[#dc2626] rounded-l p-2 text-white " onClick={()=>{remove(data.id)}}>Delete</button>
                      
                      </td>
                
              </tr>
      
            
      
                )
      
              })
            }
            </tbody>
      
      </table>
      
            </div>

        </div>
    )
}

export default Newadmin;