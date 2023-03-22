import React from 'react'
import Cards from './Cards';
import '../css/MainDash.css';

const MainDash = () => {
  return (
    <div className='maindash'>
        <h1>Dashboard</h1>
        <Cards />
    </div>
  )
}

export default MainDash