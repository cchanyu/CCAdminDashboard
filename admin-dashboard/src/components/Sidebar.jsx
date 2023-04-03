import React, { useState } from 'react'
import Logo from '../imgs/logo.png';
import '../css/Sidebar.css';

import { SidebarData } from '../data/data';
import { UilSignOutAlt } from '@iconscout/react-unicons';

const Sidebar = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className='sidebar'>
        {/* logo */}
        <div className='sidebar--logo'>
            <img src={Logo} alt="logo" />
            <span>
              Hello, User
            </span>
        </div>

        {/* menu */}
        <div className='sidebar--menu'>
          {SidebarData.map((item, index) => {
            return(
              <div className={ selected === index ? 'sidebar--menuItem active' : 'sidebar--menuItem' }
              key={index} onClick={()=>setSelected(index)}>
                <item.icon />
                <span>
                  {item.heading}
                </span>
              </div>
            )
          })}

          <div className="sidebar--menuItem">
            <UilSignOutAlt />
          </div>
        </div>
    </div>
  )
}

export default Sidebar