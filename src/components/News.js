import React from 'react'
import pic from '../news-pic.jpg'
import './styles/news.css'

const News = () => {
    return (
        <div className='article news'>
            <h3>From today's featured article</h3>
            <p className='news-pic'>
                <img  src={pic} alt="news-pic"/>
                <span>Naomi Osaka and Novak Djokovic</span> 
            </p>
            <ul>
                <li>In Zamfara, Nigeria, 279 girls that had been kidnapped from a secondary school by armed bandits are released.</li>
                <li>In tennis, Naomi Osaka wins the women's singles and Novak Djokovic wins the men's singles at the Australian Open (both winners pictured).</li>
                <li>Porfirije is enthroned as the 46th Patriarch of the Serbian Orthodox Church.</li>
                <li>NASA's Perseverance rover, carrying the Ingenuity helicopter, successfully lands on Mars.</li>
            </ul>
            <ul>
                <li><a href='#home'><b>Ongoing</b></a></li>
                <li><a href='#home'>Ng Man-tat</a></li>
                <li><a href='#home'>Zlatko Kranjčar</a></li>
            </ul>
            <ul>
                <li><a href='#home'><b>Recent deaths</b>:</a></li>
                <li><a href='#home'>Ng Man-tat</a></li>
                <li><a href='#home'>Zlatko Kranjčar</a></li>
                <li><a href='#home'>Bunny Wailer</a></li>
                <li><a href='#home'>Chris Barber</a></li>
                <li><a href='#home'>Joseph Duffy</a></li>
                <li><a href='#home'>Vernon Jordan</a></li>
            </ul>
            <div><a href='#home'>Nominate an article</a></div>
            <h3>On this Day</h3>
            <p><b>March 4</b>: Feast day of <b>Saint Casimir</b> (Catholicism)</p>
            <ul>
                <li>1386 – Jogaila, Grand Duke of Lithuania, was crowned King of Poland as Władysław II Jagiełło (pictured), beginning the Jagiellonian dynasty.</li>
                <li>1776 – American Revolutionary War: Using artillery transported from Ticonderoga, the Continental Army occupied Dorchester Heights, forcing the British to abandon Boston two weeks later.</li>
                <li>1918 – A case of influenza was recorded at Camp Funston, Kansas, conventionally marking the beginning of the Spanish flu.</li>
                <li>1941 – Second World War: British Commandos successfully executed a raid on the Lofoten Islands in German-occupied Norway.</li>
                <li>2009 – President Omar al-Bashir of Sudan was indicted by the International Criminal Court on charges of war crimes and crimes against humanity committed during the War in Darfur.</li>
            </ul>
            <ul>
                <li><b>Stephen III of Hungary </b>(d. 1172)</li>
                <li><b>Robert Emden </b>(b. 1862)</li>
                <li><b>Jane Fawcett </b>(b. 1921)</li>
            </ul>
            <ul className='article-list'>
                <li>More anniversaries</li>
                <li><a href='#home'>Mar 3</a></li>
                <li><b><a href='#home'>Mar 4</a></b></li>
                <li><a href='#home'>Mar 5</a></li>
            </ul>
            <ul>
                <li><b><a href='#home'>Archive</a></b></li>
                <li><b><a href='#home'>By email</a></b></li>
                <li><b><a href='#home'>List of days of the year</a></b></li>
            </ul>
        </div>
    )
}

export default News
