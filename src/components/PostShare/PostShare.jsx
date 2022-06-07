import React from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'

function PostShare() {
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt="" />
        <div>
            <input type="text" placeholder="What's happening" />
        </div>
        <div className="postOptions"></div>
    </div>
  )
}

export default PostShare