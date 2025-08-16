import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';


const TitleCard = ({title,category}) => {

  const [apiData,setApiData] = useState([]);
  const cards_Scroll = useRef(null);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
  }
};

  useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res =>setApiData(res.results))
  .catch(err => console.error(err));

    const handlekey = (e)=>{
      if(!cards_Scroll.current) return;
          if(e.key === 'ArrowRight'){
            cards_Scroll.current.scrollLeft += 700;
          }
          else if(e.key === 'ArrowLeft'){
            cards_Scroll.current.scrollLeft -= 700;
          }
    }


    window.addEventListener('keydown',handlekey);
    return ()=> window.removeEventListener('keydown',handlekey);

  },[])

  const handleMouseEnter = (e)=>{
    cards_Scroll.current = e.currentTarget;
  }
  const handleMouseLeave = (e)=>{
    cards_Scroll.current = null;
  }

  return (

    <div className='titlecards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div
        className='cards-list'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
            <p className='card-name'>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
