import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className='header__icon'/>
            </IconButton>

            <img 
                className='header__logo'
                src='https://www.txstate-epdc.net/wp-content/uploads/2019/10/Lehman-College-Logo_lehsign_bg_shield_rgb-250x298.png'
                alt='lehman-college'
            />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
        </div>
    )
}

export default Header