import React from 'react'
import logo from '../wiki-logo.png'
import './styles/sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img className='logo' src={logo} width="125" height="150" alt="logo"/>
            <ul className='sidebar-list-top'>
                <li><a href="#home">Main page</a></li>
                <li><a href="#home">Contents</a></li>
                <li><a href="#home">Current events</a></li>
                <li><a href="#home">Random article</a></li>
                <li><a href="#home">About Wikipedia</a></li>
                <li><a href="#home">Contact us</a></li>
                <li><a href="#home">Donate</a></li>
            </ul>
            <ul className='sidebar-list'>
                <li className='list-heading'>Contribute</li>
                <li><a href="#home">Help</a></li>
                <li><a href="#home">Learn to edit</a></li>
                <li><a href="#home">Community portal</a></li>
                <li><a href="#home">Recent changes</a></li>
                <li><a href="#home">Upload file</a></li>
            </ul>
            <ul className='sidebar-list'>
                <li className='list-heading'>Tools</li>
                <li><a href="#home">What links here</a></li>
                <li><a href="#home">Related changes</a></li>
                <li><a href="#home">Special pages</a></li>
                <li><a href="#home">Page information</a></li>
                <li><a href="#home">Wikidata item</a></li>
            </ul>
            <ul className='sidebar-list'>
                <li className='list-heading'>Print/export</li>
                <li><a href="#home">Download as PDF</a></li>
                <li><a href="#home">Printable version</a></li>
            </ul>
            <ul className='sidebar-list'>
                <li className='list-heading'>In other projects</li>
                <li><a href="#home">Wikimedia Commons</a></li>
                <li><a href="#home">MediaWiki</a></li>
                <li><a href="#home">Meta-Wiki</a></li>
                <li><a href="#home">Multilingual Wikisource</a></li>
                <li><a href="#home">Wikispecies</a></li>
                <li><a href="#home">Wikibooks</a></li>
                <li><a href="#home">Wikidata</a></li>
                <li><a href="#home">Wikimania</a></li>
                <li><a href="#home">Wikinews</a></li>
                <li><a href="#home">Wikiquote</a></li>
                <li><a href="#home">Wikibooks</a></li>
                <li><a href="#home">Wikidata</a></li>
                <li><a href="#home">Wikimania</a></li>
                <li><a href="#home">Wikinews</a></li>
                <li><a href="#home">Wikiquote</a></li>
            </ul>
        </div>
    )
}

export default Sidebar
