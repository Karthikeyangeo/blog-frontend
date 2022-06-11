import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form  className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" 
                        alt="Current Profile Pic" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text"  placeholder='Karthik'/>
                <label>Email</label>
                <input type="email"  placeholder='karthik@gmail.com'/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
