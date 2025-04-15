import React from 'react'



import HeaderOption from './HeaderOption'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';
// import { auth } from './firebase';

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import './Header.css'


function Header() {
    return (
        <div className='header'>

            <div className='header__left'>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkedIn Logo' />
                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100279.jpg?t=st=1744722184~exp=1744725784~hmac=4d982a315d6ed1a08cd9a23eced35a3b2f80461ff5fc8db562499451252912a9&w=740"  title='Me' />
            </div>
        </div>
    );



}

export default Header;