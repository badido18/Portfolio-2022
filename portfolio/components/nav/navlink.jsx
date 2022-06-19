import React from 'react'
import navStyle from './navbar.module.sass'

const NavLink = (props) => {
    return (   
    <div className={navStyle.LinkBar} >
        {
            !!props.data.image ? 
                <img src={props.data.image} alt={props.data.title}></img> 
            :   <p> {props.data.title} </p>  
        }
    </div>        
    )
}

export default NavLink