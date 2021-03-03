import React from 'react'
import './styles/banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-main'>
                <h3>Welcome to <a href="#home">Wikipedia</a>,</h3>
                <p>the <a href="#home">free encyclopedia</a> that <a href="#home">anyone can edit</a>.</p>
                <p><a href="#home">6,261,218</a> articles in <a href="#home">English</a></p>
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
