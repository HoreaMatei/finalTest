'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react';
import Dropdown from './Dropdown';
import './navbar.css'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const { pathname } = usePathname();
  return (
   
<div className={`${pathname  ? 'navigation' : 'navigation1'}`}> 

  <Link className='homeButton' href='/'>
  Home</Link>
  <Dropdown/>
</div>

  )
}

export default Navbar