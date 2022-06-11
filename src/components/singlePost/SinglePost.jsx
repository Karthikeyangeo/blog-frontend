import { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {API} from '../../globalData'
import axios from 'axios'
import './singlePost.css'
export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split('/')[2]    //getting path after splitting and fetching only the final path (id)
    const [post,setPost] = useState({});
    const timeStamp = new Date(post.createdAt).toDateString();
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get(`${API}/posts/${path}`);
            setPost(res.data);
        }
        getPost();
    },[path])

    
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img 
                src={post.photo} 
                alt="Single Post Images" 
                className="singlePostImg" 
            />
            )}
            
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                <i className="singlePostIcon EditIcon fa-solid fa-pen"></i>
                <i className="singlePostIcon DeleteIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author : <b>{post.username}</b></span>
                <span className='singlePostDate'>{timeStamp}</span> 
            </div>
            <p className='singlePostDesc'>
                {post.desc}
            </p>
            
        </div>
    </div>
  )
}
