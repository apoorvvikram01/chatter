import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'


function Nav_Foot() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default Nav_Foot