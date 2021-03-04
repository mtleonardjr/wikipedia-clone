import React from 'react'
import pic from '../featured.webp'
import './styles/featured.css'

const Featured = () => {
    return (
        <div className='article featured'>
            <h3>From today's featured article</h3>
            <p>
                <img className='featured-pic' src={pic} alt="featured-pic"/> 
                <b>Warren G. Harding</b> (1865–1923) was the 29th president of the United States, serving from March 4, 1921, until his death in 1923. A member of the Republican Party, Harding was defeated for Governor of Ohio in 1910, but was elected to the Senate in 1914. He ran for the Republican nomination for president in 1920. Considered a long shot until after the convention began, he was nominated on the tenth ballot. He conducted a front porch campaign, running on the theme of a return to normalcy, and won in a landslide, the first sitting senator to be elected president. He appointed a number of well-regarded figures to his cabinet, including Andrew Mellon at the Treasury Department, Herbert Hoover at Commerce, and Charles Evans Hughes at State. After his death in San Francisco, a number of scandals, including Teapot Dome, came to light, as did his extramarital affair with Nan Britton, eroding his popular regard. Harding was succeeded by Vice President Calvin Coolidge. (Full article...)
            </p>
            <ul className='article-list'>
                <li>Recently Featured:</li>
                <li><a href='#home'>Carmen</a>,</li>
                <li><a href='#home'>Lionel Matthews</a>,</li>
                <li><a href='#home'>Interstate 70 in Colorado</a></li>
            </ul>
            <ul>
                <li><a href='#home'><b>Archive</b></a></li>
                <li><a href='#home'><b>By email</b></a></li>
                <li><a href='#home'><b>More featured articles</b></a></li>
            </ul>
            <h3>Did you know ...</h3>
            <ul>
                <li>... that George Balanchine's ballet The Four Temperaments (production pictured) premiered at a high-school auditorium?</li>
                <li>... that German cricketer Christina Gough, who scored 348 runs in Women's Twenty20 Internationals in 2020, completed a Master of Arts degree in Modern Languages (German) at St Hilda's College, Oxford?</li>
                <li>... that biotin has been proven to benefit hoof health in cattle and horses, but evidence for human nail health is very weak?</li>
                <li>... that John Moffet set an Olympic swimming record despite injuring himself during the same race?</li>
                <li>... that the co-founder of Arkansas radio station KTOY, the first Black-owned radio station in the state, continued teaching math after starting it?</li>
                <li>... that the French classical scholar François Guyet kept his composure during a lithotomy by reading Lucan's Pharsalia?</li>
                <li>... that despite containing crystals and chemicals which are thought to deter herbivory, Hypericum sechmenii is still under threat of extinction from grazing?</li>
                <li>... that Asuka Langley Soryu's surname was taken from two warships used in World War II?</li>
            </ul>
            <ul>
                <li><a href='#home'>Archive</a></li>
                <li><a href='#home'>Start a new article</a></li>
                <li><a href='#home'>Nominate an article</a></li>
            </ul>
        </div>
    )
}

export default Featured
