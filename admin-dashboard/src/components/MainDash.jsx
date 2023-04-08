import React from 'react'
import Cards from './Cards';
import '../css/MainDash.css';
import Table from './Table';

const MainDash = () => {
  return (
    <div className='maindash'>
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default MainDash