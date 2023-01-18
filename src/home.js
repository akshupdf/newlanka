import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import wild from './images/fest2.jpg'
import fest from './images/fest.jpg'
import ride from './images/fest1.jpg'
// import anu from './images/anu.jpg'
// import col from './images/city.jpg'
// import sun from './images/sunset.jpg'
// import kandi from './images/kandy.jpg'
// import top from './images/sea2.jpg'
// import top1 from './images/lanka.jpeg'
// import top2 from './images/train1.jpg'
import { Container, Link } from 'react-floating-action-button'
// import {FiInstagram,FiFacebook,FiLinkedin} from 'react-icons/fi'
import Nav from './components/navbar';
import Minislider from './components/minislider';
import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Typed from 'react-typed'
import Popup from 'reactjs-popup';
import {FaRegHandPointLeft} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useNavigate } from "react-router-dom";





function Home () {

   useEffect(() => {
        AOS.init();
      }, [])

  const [data,setData] = useState([0])
    

    const showData = () => {
    return axios.get("http://localhost:5000/posts/").then((response) => {
     setData(response.data)
     
  
  })
    }

    useEffect(() => {
      showData();
  }, [])
        
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

   
    const settings1 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
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
    const settings2 = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
    return (
        <div className='h-full w-auto sm:w-100 flex-wrap'>
           
    <div className=' w-auto '>
    <div className='w-full  absolute  md:shrink-0 '>

    <Carousel   responsive={settings1} infinite={true} 
            keyBoardControl={true}  arrows={false} renderButtonGroupOutside={true} autoPlay={true}
            autoPlaySpeed={3500}  >
      {
        data && data.map((data, index)=>(

                <div className="  w-full  h-screen relative " data-interval='8000' key={data.id}><img src={data.body}  id={index} alt="" className=' absolute w-full h-auto'></img></div>
       
         ))
      }

      </Carousel>
        
    {/* <Carousel   responsive={settings1} infinite={true} 
            keyBoardControl={true}  arrows={false} renderButtonGroupOutside={true} autoPlay={true}
            autoPlaySpeed={3500} >

                

                
                <div className="  w-full  h-screen relative"><img src={top} alt="" className=' absolute w-full h-auto'></img></div>
                <div className='w-full  h-auto  relative '><img src={top1} alt="" className=' absolute w-full h-auto'></img></div>
                <div className=" w-full  h-auto  relative "><img src={top2} alt="" className=' absolute w-full h-auto'></img></div>
                <div className=" w-full  h-auto  relative "><img src={sun} alt="" className=' absolute w-full h-auto'></img></div>
                <div className=" w-full  h-auto  relative "><img src={kandi} alt="" className=' absolute w-full h-auto'></img></div>
                <div className=" w-full  h-auto  relative "><img src={anu} alt="" className=' absolute w-full h-auto'></img></div>
                <div className=" w-full  h-auto  relative "><img src={col} alt="" className=' absolute w-full h-auto'></img></div>

                
        
            </Carousel> */}
            
    </div>
   

    <div className='fixed'><Nav /></div>
    <div className='flex flex-wrap'>

    <div className='relative mt-20 sm:w-[40%] w-40 sm:h-[60vh] h-40    text-left   sm:p-20  font-semibold text-opacity-1000 text-white   '>
    <div className='py-8'>
        <Typed
          className=' text-4xl  font-bold md:block hidden  relative'
          strings={['Welcome to Sri Lanka', 'Explore','An Island PARADISE']} typeSpeed={120} backSpeed={100} loop />
      </div>
        <p className=' md:block hidden'>Sri Lanka has been ranked among the Top 10 friendliest countries in the world in the 2022 Readers' Choice Awards. The Condé Nast Traveller revealed the most welcoming destinations from all four corners of the globe, as voted by its readers.</p>
        
        <a href="https://www.srilanka.travel/" className="relative bg-white w-[25vh] items-center md:block hidden px-12 py-3 mt-4 overflow-hidden text-lg font-medium text-black border-2 border-black rounded-full hover:text-white group hover:bg-black">
<span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 mb-1 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">Explore</span>
</a>
    </div>
    <div className=' sm:w-[40%]  h-[40vh] sm:relative sm:mt-[50vh] ml-60 p-4 md:block hidden '>
      <Minislider />
    </div>
    </div>
    </div>
   
        
    
        <div className='flex flex-wrap h-[100vh] w-[100%] sm:p-20 mx-auto  p-6 m-2 '>
            <div className=' sm:w-[70%] w-80 h-[60vh] sm:p-10' data-aos="fade-right" data-aos-duration="2000">
            <Carousel   responsive={settings2} infinite={true} swipeable={true} 
            keyBoardControl={true} autoPlay={true}
            autoPlaySpeed={3500}  >
               <div className=' sm:h-[50vh] h-[70vh] md:shrink-0 rounded-xl   border-gray-400 border-2 p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className=' m-2 sm:w-[30vh] w-[45vh] h-52' src={fest} alt="">

              </img>
                
                <h1 className="py-2 text-5xl">FESTIVE </h1>
              </div>
              <div className="my-rotate-y-180 p-2 absolute overflow-hidden backface-hidden w-[30vh]  ">
               <p>According to the Tamil calendar, Thai Pongal is celebrated in the tenth month Thai on its first day. Thai Pongal is celebrated to offer prayers to the Surya, the Rain God Indra and the cattle for a good harvest.</p>
                 <button className='border-2 border-black rounded-xl w-30 p-2'><a href="https://www.holidify.com/pages/vibrant-festivals-of-sri-lanka-3362.html">Read more</a>    </button>

              </div>
            </div>
          </div>
                <div className=' sm:h-[50vh] h-[70vh] rounded-xl w-60 md:shrink-0 border-gray-400 border-2 p-2  sm:m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className=' m-2 sm:w-[30vh] w-[45vh] h-52' src={ride} alt="">

              </img>
                
                <h4 className="py-2 text-4xl">ADVENTURES </h4>
              </div>
              <div className="my-rotate-y-180  absolute p-2 overflow-hidden backface-hidden w-[30vh]  ">
              <p>Surrounded by the Indian Ocean with its coral gardens, multitudeof exotic fishes and ancient wrecks Sri Lanka offers one of the best diving experiences in the world. The colorful coral gardens along southern coasts and old and new ship wrecks around the Galle harbor and little</p>
                 <button className='border-2 border-black rounded-xl w-30 p-2' ><a href="https://www.srilanka.travel/adventure-sports">Read more</a>    </button>

              </div>
            </div>
          </div>

                <div className=' sm:h-[50vh] h-[70vh] md:shrink-0 rounded-xl w-60 border-gray-400 border-2 sm:p-2 m-4 perspective cursor-pointer preserve-3d hover:my-rotate-y-180 duration-1000'>
            <div className=" w-80 h-50 relative  cursor-pointer items-center preserve-3d group-hover:my-rotate-y-180 duration-1000">

              <div className=" backface-hidden absolute cursor-pointer  "><img className=' m-2 sm:w-[30vh] w-[45vh] h-52' src={wild} alt="">

              </img>
                
                <h4 className="py-2 text-5xl">WILDLIFE </h4>
              </div>
              <div className="my-rotate-y-180 sm:p-2 absolute mx-auto backface-hidden sm:w-[30vh] w-[45vh] ">
                <p>SriLanka is home to roughly 123 species of mammals, 41 of which are threatened. 16 of the species are endemic, of which 14 are threatened, including the large sloth bear. mammalian orders, with 30 different species. Sri Lanka's surrounding waters are home to 28 species of Cetaceans.</p>
                <button className='border-2 border-black rounded-xl w-30 p-2'><a href="https://www.thrillophilia.com/places-to-visit-in-sri-lanka">Read more</a>    </button>

              </div>
            </div>
          </div>
            </Carousel>

            </div>

            <div className='sm:w-[30%] mt-20 mx-auto shadow-xl  sm:h-[50vh] p-4  md:shrink-0' data-aos="fade-left" data-aos-duration="2000">
                <h1 className='text-6xl h-40 bold '> EXPLORE THE ISLAND</h1>
                <p className='py-4'>Full of romantic landscapes, stirring mountains, lush green tea gardens and golden beaches, the island nation of Sri Lanka is nothing short of magnificent.</p>
                <button className="border-2 border-black w-40 rounded-xl bg-[#16a34a] h-10  ml-5">Explore more</button>
            </div>
            </div>
            
              
        
        <Container className=" text-black relative animate-bounce" >


            
                <div>
                <Popup position="top " trigger={<a href="#_" class="relative inline-flex items-center justify-start bg-white px-5 py-3 overflow-hidden font-bold rounded-full group">
<span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
<span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
<span class="relative w-full text-left  transition-colors duration-200 ease-in-out group-hover:text-white">Click here </span>
<span class="absolute inset-0 border-2 border-white rounded-full"></span>
</a>} 
     >
      <div className=" rounded-xl h-60 w-80 mx-auto bg-white text-center">
        <div className="grid text-center p-4">
            <h1>Submit Your Feedback</h1>
            <input type="text" placeholder="Enter your name" className="border-2 border-black p-2 m-2"  value={name} onChange={e => namechange(e.target.value)}></input>
            <input type="text" placeholder="Enter your Feedback" className="border-2 border-black p-2 m-2"  value={feedback} onChange={e => feedchange(e.target.value)}></input>
            
            <button className="border-2 border-black w-20 mx-auto  " onClick={handlesubmit}>Submit</button>
            
        
        </div>

      
      </div>
      
    </Popup>
                
                </div>
                   
                
            </Container>
       
            
        </div>

        
    )
 } 
export default Home;