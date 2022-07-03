import { Link } from 'react-router-dom';
import './post.css'

export default function Post({post}) {
    const{title,desc,createdAt,categories,_id,photo}=post;  //Destructuring
    let createdDate = new Date(createdAt).toDateString();  //changing date to string
    const linkStyle = {textDecoration:'none',color:'inherit'};

    const PF = `http://localhost:5000/images/`

  return (
    <div className='post'>
        {photo && (
        <img 
            className='postImg'
            src={PF+ photo} 
            alt="Blog Post Images" 
        />
        )}
        <div className="postInfo">
            <div className="postCats">
                {categories.map((data)=>(
                    <span className="postCat">{data.name}</span>
                ))}
        
            </div>
            <Link to={`post/${_id}`} style={linkStyle}>
                <span className="postTitle">
                    {title}
                </span>
            </Link>
            <hr />
            <span className="postDate">
                {createdDate}
            </span>
        </div>
        <p className='postDesc '>
            {desc}
        </p>
    </div>
  )
}
