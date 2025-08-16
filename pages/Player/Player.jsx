import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrow_img from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'
import Home from '../Home/Home'
import { useNavigate } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name : "",
    key :"",
    published_at:"",
    type:"",
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmJkYzEyODU4NmY5ZjhkY2ExNTgyNGI1ZTYzYjdlYiIsIm5iZiI6MTc1Mzc4MjQ0Ny4zMDA5OTk5LCJzdWIiOiI2ODg4OThhZjhhZjAwNzFkYWI4YTc4NzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lOdiO8NfSmiieJ1PfRvU4R3niNCnoRJNXPjYPhwGYog'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])



  return (
    <div className='Player'>
      <img src={backArrow_img} onClick={()=> navigate('/') }></img>
      <iframe width="90%" height="90%" src={`http://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='play_info'>
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      </div>
  )
}

export default Player