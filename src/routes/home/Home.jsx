import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './home.css'
import axios from 'axios';
import{API} from '../../globalData'

export default function Home() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${API}/posts`);
      setPosts(res.data)
      console.log(res.data)
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
