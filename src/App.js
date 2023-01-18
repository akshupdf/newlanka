
import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
  

} from 'react-router-dom';
import About from './about';
import Home from './home';
import React from 'react'
import Login1 from './login';
import Admina from './admin';

import Footer from './components/Footer';
import Sidenav from './components/sidenav';
import Leads from './components/admin/leads';
import Links from './components/admin/links';
import Newadmin from './components/admin/newAdmin';
import Media from './components/media';
import Adminpanel from './adminpanel';
import PostList from './components/PostList';



function App() {
  return (

    <BrowserRouter>

    
    <Routes>
    <Route exact path='/about' element={<About />} ></Route>
    <Route exact path='/' element={<Home />} ></Route>    
    <Route exact path='/login' element={<Login1 />} ></Route>
    <Route exact path='/admin' element={<Admina />} ></Route>
    <Route exact path='/side' element={<Sidenav />} ></Route>
    <Route exact path='/leads' element={<Leads />} ></Route>
    <Route exact path='/links' element={<Links />} ></Route>
    <Route exact path='/media' element={<Media />} ></Route>
    <Route exact path='/posts' element={<PostList />} ></Route>
    <Route exact path='/newadmin' element={<Newadmin />} ></Route>
    <Route exact path='/adminpanel/*' element={<Adminpanel />} ></Route>
    </Routes>

    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
