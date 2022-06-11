import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
            className='headerImg'
            src="https://images.news18.com/ibnlive/uploads/2021/07/1627377451_nature-16346430033x2.jpg?impolicy=website&width=510&height=356" 
            alt="Header Images" 
        />
    </div>
  )
}
