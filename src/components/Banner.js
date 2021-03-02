import React from 'react'
import './styles/banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-main'>
                <h2>Welcome to Wikipedia</h2>
                <p>the free encyclopedia that anyone can edit.</p>
                <p>6,261,218 articles in English</p>
            </div>

            <div className="invs-block"></div>

            <ul className='banner-list'>
                <li><a href="#home">The arts</a></li>
                <li><a href="#home">Biography</a></li>
                <li><a href="#home">Geography</a></li>
                <li><a href="#home">History</a></li>
                <li><a href="#home">Mathematics</a></li>
                <li><a href="#home">Science</a></li>
                <li><a href="#home">Society</a></li>
                <li><a href="#home">Technology</a></li>
                <li><b><a href="#home">All portals</a></b></li>
            </ul>

        </div>
    )
}

export default Banner
