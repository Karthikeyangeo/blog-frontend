import './posts.css'
import Post from '../post/Post'

export default function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map( (data,key)=>
        <Post key={key} post={data}/>
      )}
       
    </div>
  )
}
