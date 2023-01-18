import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Link } from 'react-floating-action-button'


function Media () {

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
        

        
        <div className="relative">
            
    
   
                <div >
                    {/* <p><a href={data[0].link}></a></p> */}
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                   
                   
                    <Container className=" text-black bg-transparent " >
                    {
        data && data.map((data , index) =>{
            return (
                
        
        
        
        <Link href={data.link}
            
            ><img src={data.logo} alt="" className='w-20 h-10 m-2 '></img></Link>
            
            
            )
            } ) }

</Container>

                
    </ul>

                </div>
            
 
        </div>
    )
}


export default Media;