
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'
import React, { useState } from 'react'
import Popup from 'reactjs-popup';

const Adminlist = (props) => {

    const [id, idchange] = useState("");
    const [username, namechange] = useState("");
    const [password, feedchange] = useState("");

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
  return (
    <List {...props}>
        
        <div>
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
        </div>
      <Datagrid>
        
        <TextField source='username' />
        <EditButton basePath='/admin' />
        <DeleteButton basePath='/admin' />
      </Datagrid>
    </List>
  )
}

export default Adminlist