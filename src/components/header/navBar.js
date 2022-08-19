import React from 'react'
import './Header.css'
import imgLogo from './logo.svg'
import CustomizedBadges from '../cartwidget/CartWidget'

const Header = () => {
  return (
    <header>
        <div className='container'>
            <nav className='navbar'>            
                <a className="navbar-brand" href="/">
                    <img src={imgLogo} alt='Logo' />
                </a>                
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link'>INICIO</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>COMPRAR</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>VENDER</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link'>FAQ</a>
                    </li>
                </ul>                
                <div>
                    {CustomizedBadges()} 
                </div> 
            </nav>
        </div>
    </header>
  )
}

export default Header