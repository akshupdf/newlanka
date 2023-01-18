import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import Media from "./components/media";
import Nav from "./components/navbar";


function About () {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [feedback, feedchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, feedback };
       
        fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            alert('Thank you for your valuable feedback')
            navigate('/');
        }).catch((err) => {
            console.log(err)
        });
    }


    return (
        <div className="w-full h-screen bg-[url('./images/feed1.jpg')] bg-no-repeat bg-cover">
            
           <div><Nav /></div>

    <div className="w-[100vh] h-[100vh] ml-[30vh]  text-center mx-auto ">
       
        <Popup position="top" trigger={<button className="border-2 border-black bg-white text-4xl rounded-2xl p-2 mt-[40vh]"> Submit Your Feedback </button>} 
     >
      <div className="border-black border-2 h-80 w-80 mx-auto bg-white text-center">
        <div className="grid text-center">
            <input type="text" placeholder="Enter your name" className="border-2 border-black p-2 m-2" value={name} onChange={e => namechange(e.target.value)} ></input>
            <input type="text" placeholder="Enter your Feedback" className="border-2 border-black p-2 m-2" value={feedback} onChange={e => feedchange(e.target.value)} ></input>
            
            <button className="border-2 border-black w-20 mx-auto  " onClick={handlesubmit}>Submit</button>
            
        
        </div>

      
      </div>
      
    </Popup>
               
            </div>
            <div>
                <Media />
            </div>
           
        </div>
    )
}

export default About;