import React from 'react'
import './Nav.css'
import { useState } from 'react'
import { useEffect } from 'react'
function Nav() {
  const [show,setShow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })

  console.log(show);


  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img width={'150px'} src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="netflix logo" />
    </div>
  )
}

export default Nav
