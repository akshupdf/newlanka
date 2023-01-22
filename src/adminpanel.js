import React from 'react'
import {fetchUtils, Admin, Resource } from 'react-admin'
import PostList from './components/PostList'
import PostEdit from './components/PostEdit'
import simpleRestProvider from 'ra-data-simple-rest'

import LinkList from './components/LinkList'
import LinkEdit from './components/LinkEdit'
import Adminlist from './components/adminlist'
import Adminedit from './components/adminedit'
import Imagelist from './components/imagelist'
import Imageedit from './components/Imageedit'
import Minilist from './components/minilist'
import Miniedit from './components/Miniedit'


function Adminpanel() {
   
    const fetchJson = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        
        options.headers.set('Content-Range', 'posts 0-50/50');
        options.headers.set('Access-Control-Allow-Headers', '*')
        
        
        return fetchUtils.fetchJson(url, options);
    }
    const dataProvider = simpleRestProvider('http://localhost:3000/', fetchJson );

    return(
        <div>
             <Admin basename='/adminpanel' dataProvider={dataProvider}>
            <Resource name="feedback" list={PostList}
            edit={PostEdit}
            ></Resource>
            <Resource name="links" list={LinkList} edit={LinkEdit}></Resource>
            <Resource name="posts" list={Imagelist} edit={Imageedit}></Resource>
            <Resource name="admin" list={Adminlist} edit={Adminedit} ></Resource>
            <Resource name="mini" list={Minilist} edit={Miniedit}></Resource>
             
             </Admin>
        </div>
    )

}

export default Adminpanel;