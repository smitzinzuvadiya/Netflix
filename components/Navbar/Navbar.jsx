import React, { useEffect ,useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navRef = useRef();

    useEffect(()=>{
        const handlescroll = ()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark');
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        };

        window.addEventListener('scroll',handlescroll);

        return ()=>{
            window.removeEventListener('scroll',handlescroll)
        }

    },[])

    const navigate = useNavigate();
  return (
    <div className='navbar' ref={navRef}>
        <div className="navbar-left">
            <img src={logo}></img>
            <ul className='navbar-left-catogry'>
                <li>Home</li>
                <li>TV Show</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
 
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} className='icons'></img>
            <p>Children</p>
            <img src={bell_icon} className='icons'></img>
            <div className='navbar-profile'>
                <img src={profile_icon} className='profiles'></img>
                <img src={caret_icon}></img>
                <div className='dropDown'>
                    <p onClick={()=> navigate('/login')} className='loginout'>Sing out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar