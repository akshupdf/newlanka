import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
import { FiSearch } from 'react-icons/fi'
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


function Nav() {
  
  const [search, setSearch] = useState('')
    
    const url = `https://www.google.com/search?q=${search}`
            
    const Searchdata = () => {
     
      window.open(url)
      
      }

  const [nav, setNav] = useState(false);


  const handleNav = () => { setNav(!nav); }

  const handleClose = () => setNav(!nav)


  return (

    <div className=" relative flex w-[200vh] h-auto text-black  font-sans ">


      <div className='w-[40%] absolute ml-20 '><Link to='/'><img src={logo} alt="" className='h-10 m-2'></img> </Link></div>
      <div className='w-[80%] ml-[70%] hidden md:flex'>
        <ul className='flex  '>
          <li className='p-4 relative hover:underline italic' ><Link to='/'>Home </Link></li>
          <li className='p-4 relative hover:underline italic' ><Link to='/about'>About </Link></li>
          <li className='p-4 relative hover:underline italic' ><Link to='/login'>Login </Link></li>
        </ul>
      </div>
      <div>
        <div className=" justify-center mt-2 ">
          <div className="mr-10 w-[30vh]  hidden md:flex">
            <div className="input-group relative items-stretch w-full mb-4 rounded-xl">
              <input  value={search}
          onChange={event => setSearch(event.target.value)} type="search" className="bg-transparent  relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />

            </div>
            <button className='mb-4 text-xl border-zinc-200 border-2 w-10 p-2 rounded-xl' onClick={Searchdata}><FiSearch /></button>
          </div>

          <div onClick={handleNav} className=' text-black block md:hidden text-right'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div className={nav ? 'fixed   w-[30%] h-[40%]   bg-black text-white  ease-in-out duration-500' : 'fixed right-[-100%]'}>


            <ul className='  '>
              <li className='p-4 ' ><Link to='/' onClick={handleClose} >Home </Link></li>
              <li className='p-4 ' ><Link to='/about' onClick={handleClose} smooth={true} offset={50} duration={500}>About </Link></li>
              <li className='p-4 ' ><Link to='/login' onClick={handleClose} smooth={true} offset={50} duration={500}>Login </Link></li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )

}

export default Nav