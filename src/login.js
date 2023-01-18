import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Nav from "./components/navbar";




const Login1 = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
            },[]);

            const ProceedLogin = (e) => { 
                e.preventDefault();
                
                    fetch("http://localhost:5000/admin/" + username).then((res)=>{
                        return res.json();
                    }).then((resp) => {                       
                        if (Object.keys(resp).length === 0) {
                            alert('Please Enter valid username');
                        } else{
                            if (resp.password === password) {
                                alert('Welcome to admin panel');
                                sessionStorage.setItem('username',username);
                                usenavigate('/adminpanel')
                            }else{
                                alert('Please Enter valid credentials');
                            }
                        }
                    }).catch((err) => {
                        alert('Login Failed due to :' + err.message);
                    });
                }
            
            // const validate = () => {
            //     let result = true;
            //     if (username === '' || username === null) {
            //         result = false;
            //         alert('Please Enter Username');
            //     }
            //     if (password === '' || password === null) {
            //         result = false;
            //         alert('Please Enter Password');
            //     }
            //     return result;
            // }
            return (
                <div className="w-auto h-auto">
                    <div><Nav /></div>
                    <div className=" w- h-[80vh] mx-auto text-center" >     
                    <form onSubmit={ProceedLogin}>      
                                <div className=" w-60 h-60 mx-auto  border-black border-2">
                                <h2 className="p-2">Admin Login</h2>     
                                        <input value={username} id="username" onChange={e => usernameupdate(e.target.value)} className=" border-black border-2 p-2 m-2" placeholder="Enter Id"></input>     
                                        <input type="password" id="password" value={password} onChange={e => passwordupdate(e.target.value)} className=" border-black border-2 p-2 m-2" placeholder="Enter password"></input>
                                        <button type="submit" className="btn btn-primary border-black border-2 p-1 m-4" >Login</button>                     
                                </div> 
                                </form>          
                    </div>
                </div>
            );
        


}

export default Login1;