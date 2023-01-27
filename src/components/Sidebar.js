import React from 'react'
import Heads from './Heads'
import Menu from './Menu'
import Dashboard from './Dashboard'
import Footer from './Footer'
function Sidebar() {
  return (
    <div class="wrapper">
      <Heads/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default Sidebar