import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext,useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios';
import { API } from '../../globalData';



export default function Settings() {
    const {user,dispatch} = useContext(Context);
    const PF = 'http://localhost:5000/images/';
    const[file,setFile]=useState(null)
    const [username,setUsername]= useState(null);
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const [success,setSuccess]= useState(null);
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        dispatch({type:'UPDATE_START'})
        const updatedUser ={
            userID: user._id,
            username, email,password,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                const res = await axios.post(`${API}/upload`,data);
                setSuccess(true);
                dispatch({type:'UPDATE_SUCCESS',payload:res.data})
            } catch (err) {
                dispatch({type:'UPDATE_FAILURE'})
            }
        }
        try {
            console.log(user._id)
            axios.put(`${API}/users/${user._id}`,updatedUser);
        } catch (err) {console.log(err)}
        
    }
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form  className="settingsForm" onSubmit={handleSubmit}>
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                        alt="Current Profile Pic" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file"  
                    id="fileInput" 
                    style={{display:'none'}}
                    onChange={(e)=>{setFile(e.target.files[0])}}
                    />
                </div>
                <label>Username</label>
                <input 
                    type="text"  
                    placeholder={user.username}
                    onChange={e=>setUsername(e.target.value)}
                    />
                <label>Email</label>
                <input type="email"  placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" autoComplete='on' onChange={e=>setPassword(e.target.value)}/>
                <button className="settingsSubmit" type='submit'>Update</button>
                {success && <span style={{color:'green'}}> Profile has been updated</span>}
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
