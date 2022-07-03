import './sidebar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {API} from '../../globalData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  const linkStyle = {textDecoration:'none',color:'inherit'}
  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get(`${API}/categories`);
      setCats(res.data);
      // console.log(res.data)
    }
    getCats();
  },[])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className='sidebarTitle'>ABOUT ME</span>
          <img 
            className='sidebarImg'
            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" 
            alt="Sidebar Images" 
          />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eius incidunt expedita quae corrupti ullam voluptatibus. </p>
        </div>
        <div className="sidebarItem">
          <span className='sidebarTitle'>CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((x)=>(
              <Link to={`/?cat=${x.name}`} style={linkStyle}>
              <li key={x.index} className='sidebarListItem'>{x.name}</li>
              </Link>
            ))}
            
          </ul>
        </div>
        <div className="sidebarItem">
          <span className='sidebarTitle'>FOLLOW US</span>
          <ul className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
          </ul>
        </div>
    </div>
  )
}
