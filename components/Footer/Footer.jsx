import React from 'react'
import './Footer.css'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import cards_data,{currentYear}from '../../assets/cards/Cards_data.js'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon}></img>
        <img src={instagram_icon}></img>
        <img src={twitter_icon}></img>
        <img src={youtube_icon}></img>
      </div>
      <div className='footer-text'>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p className='footer-copy-rights'>&copy; 1997 -  {currentYear} Netflix, Inc. All rights reserved.</p>

    </div>
  )
}

export default Footer