import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './home.css'
import axios from 'axios';
import{API} from '../../globalData'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${API}/posts${search}`);
      setPosts(res.data)
      // console.log(res.data)
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className='home'>
          <Posts posts={posts}/>
          <Sidebar /> 
      </div>
    </>
  )
}
