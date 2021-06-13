import React from 'react'
import './SideBarOption.css'


function SideBarOption({ active, text, Icon }) {
    return (
        <div className={`sidebaroption ${active
            && "sidebaroption--active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SideBarOption
