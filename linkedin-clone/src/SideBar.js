import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./SideBar.css";

function SideBar(){
    return(
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://img.freepik.com/premium-photo/pink-blue-neon-frame-dark-galaxy-background-illustration_53876-147350.jpg?w=740" alts=""/>
                <Avatar className='sidebar__avatar' />
                <h2>Ayoola Adebisi</h2>
                <h4>ayoolaadebisi5@gmail.com</h4>
            </div>
            <div className='sidebar__stats'>
                <div className="sidebar__stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__statNumber">2,543</p>
                </div><div className="sidebar__stat"> 
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recents</p>
            </div>
        </div>
    )
}

export default SideBar;