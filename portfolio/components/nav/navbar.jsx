import React from 'react'
import NavLink from './navlink'
import DataJSON from '/public/Data.json';
import navStyle from './navbar.module.sass'
const Navbar = () => {
  return (
    <div className={navStyle.Bar}>
        {DataJSON.navData.map( nlk =>
            <NavLink key={nlk.title} data={nlk}/>
        )}  
    </div>
  )
}

export default Navbar