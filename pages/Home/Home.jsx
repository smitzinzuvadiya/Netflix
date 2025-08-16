import React, { useState, useEffect } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Title_cards from '../../components/TitleCards/TitleCards'
import cards_data from '../../assets/cards/Cards_data'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const [currentImageIndex,setCurrentImageIndex] = useState(0);

    useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImageIndex((prevIndex)=>(prevIndex+1)%cards_data.length);
    },2000);

    return ()=> clearInterval(interval);
  },[]);

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={cards_data[currentImageIndex].image} className='banner-img' alt="Hero Banner" />
        <div className="hero-caption">
          {/* <img src={hero_title} className='caption-img' alt="Hero Title" /> */}
          <p>
            Discovering his ties to a secret ancient order, a young
            man living in modern Istanbul embarks on a quest to save the
            city from an immortal enemy.
          </p>
          <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="Play Icon" />Play</button>
              <button className='btn btn-dark'><img src={info_icon} alt="Info Icon" />More Info</button>
          </div>
          <Title_cards></Title_cards>
        </div>
      </div>
        <div className='more-cards'>
          <Title_cards title={"BlockBuster Movies"} category={"top_rated"}></Title_cards>
          <Title_cards title={"Super Hit Movies"} category={"popular"}></Title_cards>
          <Title_cards title={"Best On Netflix"} category={"upcoming"}></Title_cards>
          <Title_cards title={"All time fav"} category={"now_playing"}></Title_cards>
        </div>
        <div className='footer-class'>
          <Footer></Footer>
        </div>
    </div>
  )
}

export default Home
