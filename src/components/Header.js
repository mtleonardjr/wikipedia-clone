import React from 'react'
import './styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <ul className='login-list'>
                <li><i class="glyphicon glyphicon-user"></i>Not logged in</li>
                <li><a href="#home">Talk</a></li>
                <li><a href="#home">Contributions</a></li>
                <li><a href="#home">Create account</a></li>
                <li><a href="#home">Log in</a></li>
            </ul>
            <ul className='header-menu'>
                <li className='selected-menu-item'><a href="#home">Main Page</a></li>
                <li className='unselected-menu-item'><a href="#home">Talk</a></li>
                <li className='invs-block'></li>
                <li className='selected-menu-item'><a href="#home">Read</a></li>
                <li className='unselected-menu-item'><a href="#home">View source</a></li>
                <li className='unselected-menu-item'><a href="#home">View history</a></li>
                <li className='unselected-menu-item'><input type='text'></input><button>search</button></li>
            </ul>
            <div className='mobile-menu'>mobile-menu</div>
        </div>
    )
}

export default Header
