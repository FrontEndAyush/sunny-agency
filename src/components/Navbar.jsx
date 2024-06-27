import React from 'react'


const Navbar = () => {
  return (
   <nav className='flex justify-between p-5'>
    <img src="/images/logo.svg" alt="" />
    <img src="/images/icon-hamburger.svg" className='lg:hidden' alt="" />
   </nav>
  )
}

export default Navbar