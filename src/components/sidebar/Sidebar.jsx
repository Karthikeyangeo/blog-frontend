import './sidebar.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {API} from '../../globalData'

export default function Sidebar() {
  const [cat,setCat] = useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get(`${API}/categories`);
      setCat(res.data);
      console.log(res.data)
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
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
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
