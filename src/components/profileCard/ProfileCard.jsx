import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Yu Takaki</span>
            <span>Junior frontend developer</span>
        </div>
  
        <div className="FollowStatus">
            <hr />
            <div>
                <div className="Follow">
                    <span>320</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="Followers">
                    <span>540</span>
                    <span>Followers</span>
                </div>    
                    
            </div>
            <hr />
        </div>

        <span>
            My profile
        </span>


    </div>
  )
}

export default ProfileCard