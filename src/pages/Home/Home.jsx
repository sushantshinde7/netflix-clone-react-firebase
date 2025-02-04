import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitileCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>

      {/* Hero Section */}
      <div id="home-section" className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>

      {/* Other Sections with IDs */}
      <div className="more-cards">
        <div id="blockbuster-section">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        </div>
        <div id="netflix-originals-section">
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
        </div>
        <div id="upcoming-section">
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
        </div>
        <div id="top-picks-section">
          <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home
