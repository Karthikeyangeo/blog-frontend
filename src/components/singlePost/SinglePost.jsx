import { useEffect ,useState,useContext} from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {API} from '../../globalData'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './singlePost.css'
import {Context} from '../../context/Context';

export default function SinglePost() {
    const linkStyle = {textDecoration:'none',color:'inherit'};
    const location = useLocation();
    const path = location.pathname.split('/')[2]    //getting path after splitting and fetching only the final path (id)
    const [post,setPost] = useState({});
    const timeStamp = new Date(post.createdAt).toDateString();
    const {user}= useContext(Context);
    // const PF = `http://localhost:5000/images/`;
    const PF = `https://mkk-blog.herokuapp.com/images/`;
    const [title,setTitle] = useState('');
    const [desc,setDesc]= useState('');
    const[updateMode,setUpdateMode] = useState(false);

    const handleDelete = async() =>{
        try {
           
            await axios.delete(`${API}/posts/${post._id}`, {
                data: { username: user.username },
              });
            window.location.replace(`/`)
        } catch (err) {
            
        }
    }
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get(`${API}/posts/${path}`);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc)
        }
        getPost();
    },[path])

    const handleUpdate =async()=>{
        try {
            
            await axios.put(`${API}/posts/${post._id}`, {
                username: user.username ,
                title,
                desc
              });
            setUpdateMode(false)
        } catch (err) {
            
        }
    }
    
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && (
                <img 
                src={PF+post.photo} 
                alt={`${title} post images`}
                className="singlePostImg" 
            />
            )}{
                updateMode ? 
                    <input 
                        type="text" 
                        value={title} 
                        className='singlePostTitleInput' 
                        onChange={(e)=>setTitle(e.target.value)}
                        autoFocus
                        />
                 :(
            
                <h1 className="singlePostTitle">
                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                        <i className="singlePostIcon EditIcon fa-solid fa-pen" onClick={()=>setUpdateMode(true)}></i>
                        <i className="singlePostIcon DeleteIcon fa-solid fa-trash" onClick={handleDelete}></i>
                        </div>
                    )}
                    
                </h1>
               )
            }
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>
                    Author :
                    <Link to={`/?user=${post.username}`} style={linkStyle}>
                    <b>{post.username}</b>
                    </Link>
                </span>
                <span className='singlePostDate'>{timeStamp}</span> 
                
            </div>
            {updateMode ? 
                <textarea 
                    value={desc}
                    className='singlePostDescInput'
                    onChange={(e)=>setDesc(e.target.value)}
                /> :(
                <p className='singlePostDesc'>
                    {desc}
                </p>

                
            )}
            {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )}
        </div>
    </div>
  )
}
