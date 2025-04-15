import React from "react";
import './HeaderOption.css';
import { Avatar } from "@mui/material";

function HeaderOption({avatar,Icon, title}) {
    return (
        <div className='headerOption'>
            {/* Add your JSX content here */}
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && <Avatar className='headerOption_icon' src={avatar} />}
        
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}
export default HeaderOption;