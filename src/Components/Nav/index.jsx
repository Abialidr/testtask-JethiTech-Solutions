import React from 'react'
import Button from './Button'
import "./index.css"
import MainLinks from './Link'
function NavigationBar() {
  return (
    <div className='MainHeader'>
      <img src='./Logo/logo.svg' className='MainLogo' />
      <MainLinks/>
      <Button/>
    </div>
  )
}

export default NavigationBar
