import React from 'react'
import './styles/header.css'
import mobileLogo from '../mobile-logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <ul className='login-list'>
                <li><i className="glyphicon glyphicon-user"></i>Not logged in</li>
                <li><a href="#home">Talk</a></li>
                <li><a href="#home">Contributions</a></li>
                <li><a href="#home">Create account</a></li>
                <li><a href="#home">Log in</a></li>
            </ul>
            <ul className='header-menu'>
                <li className='selected-menu-item'><a href="#home">Main Page</a></li>
                <li className='unselected-menu-item'><a href="#home">Talk</a></li>
                <li className='invs-menu-item'></li>
                <li className='selected-menu-item'><a href="#home">Read</a></li>
                <li className='unselected-menu-item'><a href="#home">View source</a></li>
                <li className='unselected-menu-item'><a href="#home">View history</a></li>
                <li className='unselected-menu-item'>
                    <form className='input-menu-item'>
                        <input type='text'></input><button className='input-menu-button'><i class="glyphicon glyphicon-search"></i></button>
                    </form>
                </li>
            </ul>
            <div className='mobile-menu'>
                <button className='mobile-menu-button'><i className="glyphicon glyphicon-menu-hamburger"></i></button>
                <button className='mobile-menu-button'><img className='mobile-logo' src={mobileLogo} width="125" height="50" alt="logo"/></button>
                <div className='invs-block'></div>
                <button className='mobile-menu-button'><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
    )
}

export default Header
