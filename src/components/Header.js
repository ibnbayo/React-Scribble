
import React from 'react'
import logo from './reactserver.png'

const Header = () => {
  return (
    <div>
        
        <header>
            <nav className='navbar'>
            <img src={logo} alt="react-logo" width="100px"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        Fun Facts about React
        </header>
    </div>
  )
}

export default Header

