import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
        className='writeImg'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg" 
            alt="Uploaded Pic" 
        />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
                <input type="text" placeholder='Title' name="title" id="title" className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell us your story'rows={5} type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}
