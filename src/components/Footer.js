import React, {useEffect, useState } from 'react'
import axios from 'axios'

function Footer () {

    const [data,setData] = useState([])
    useEffect(() => {
      showData();
  }, [])
  
    const showData = () => {
    axios.get("http://localhost:5000/links/").then((response) => {
     setData(response.data)
     
    
  
  })
    }

    return (
        

        
        <div className=" mt-auto py-80 relative mb-0 sm:py-0 ">
            <footer className=" p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://akshupdf.github.io/profile" className="hover:underline">Akshupdf™</a>. All Rights Reserved.
    </span>
   
                <div >
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    {
        data && data.map(data =>{
            return (
        <li key={data.id}>
            <a href={data.link} className="mr-4 hover:underline md:mr-6 ">{data.name}</a>

        </li>

            )
            } ) }
                
    </ul>

                </div>
            
    
</footer>
        </div>
    )
}


export default Footer;