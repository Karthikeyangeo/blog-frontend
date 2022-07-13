import './write.css';
import { useContext, useState } from 'react';
import axios from 'axios';
import {Context} from '../../context/Context';
import {API} from '../../globalData'
import { useHistory } from 'react-router-dom';

export default function Write() {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile]=useState(null);
    const {user}= useContext(Context);
    const history = useHistory();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const newPost={
            username:user.username,
            title,
            desc
        };
        if(file){
            const data = new FormData();
            const filename = Date.now()+ file.name;
            data.append('name',filename);
            data.append('file',file);
            newPost.photo = filename;
            // console.log(data)
            try {
                const res = await axios.post(`${API}/upload`,data)
                // console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        try {
            const res = axios.post(`${API}/posts`,newPost);
            history.push(`/`)
            // window.location.replace(`${API}/post/` + res.data._id);
        } catch (err) {
            
        }
        
    }
  return (
    <div className='write'>
        { file && (
            <img 
                 className='writeImg'
                src={URL.createObjectURL(file)}
                alt="Uploaded Pic" 
            />
        )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                {/* <label htmlFor="fileInput">
                    <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input 
                    type="file" 
                    id='fileInput' 
                    style={{display:'none'}} 
                    onChange={(e)=>setFile(e.target.files[0])}
                /> */}

                <input 
                    type="text" 
                    placeholder='Title' 
                    name="title" 
                    id="title" 
                    className='writeInput' 
                    autoFocus={true}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='Tell us your story'
                    rows={5} type='text' 
                    className='writeInput writeText'
                    onChange={(e)=>setDesc(e.target.value)}
                >

                </textarea>
            </div>
            <button className="writeSubmit" type='submit'>
                Publish
            </button>
        </form>
    </div>
  )
}
