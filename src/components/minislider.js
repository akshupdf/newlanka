import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import anu from '../images/anu.jpg'
// import col from '../images/city.jpg'
// import sun from '../images/sunset.jpg'
// import kandi from '../images/kandy.jpg'
// import top from '../images/sea2.jpg'
// import top1 from '../images/lanka.jpeg'
// import top2 from '../images/train1.jpg'
import React, {useEffect, useState } from 'react'
import axios from 'axios'



function Minislider () {

    const [data,setData] = useState([0])
    

    const showData = () => {
    return axios.get("http://localhost:5000/mini/").then((response) => {
     setData(response.data)
     
  })
    }

    useEffect(() => {
      showData();
  }, [])


    const settings = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1, 
            
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    
    }
    return(
        <div className='d-none d-lg-block  '>
         

<Carousel   responsive={settings} infinite={true} 
        keyBoardControl={true}   arrows={false}  autoPlay={true}
        autoPlaySpeed={3500} >

            {
                data && data.map((data, index)=>(

                    
                    <div className="w-[30vh] m-6 h-[40vh] relative p-2 rounded-2xl " key={data.id} data-interval='8000'><img src={data.link} id={index} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  ' key={data.id}>{data.name}</h1></div></div>
           
                    
                ))
            }
            
             {/* <div className='w-[30vh] m-6 h-[40vh]  p-2 relative rounded-2xl'><img src={top2} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  '>ELLA</h1></div></div>
              <div className=" w-[30vh] m-6 h-[40vh]  p-2 relative rounded-2xl"><img src={sun} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  '>BATTICALOA</h1></div></div>
            <div className=" w-[30vh] m-6 h-[40vh]  p-2 relative rounded-2xl"><img src={kandi} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  '>KANDY</h1></div></div>
            <div className=" w-[30vh] m-6 h-[40vh]  p-2 relative rounded-2xl"><img src={anu} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  '>ANURADHA</h1></div></div>
            <div className=" w-[30vh] m-6 h-[40vh]  p-2 relative rounded-2xl"><img src={col} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  '>COLOMBO</h1></div></div>
            <div className=" w-[30vh] m-6 h-[40vh]  p-2 relative rounded-2xl"><img src={top} alt="" className='rounded-2xl absolute w-[40vh] h-[40vh]'></img><div className='relative py-60 text-[#f0fdfa] p-6'><h1 className='text-4xl  '>MIRISSA</h1></div></div>
           */}
     
        </Carousel>


        </div>
    )

}

export default Minislider; 