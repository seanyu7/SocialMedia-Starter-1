import React from 'react'
import Profileside from '../../components/profileside/Profileside'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <Profileside/>
        <div className="postSide">Posts</div>
        <div className="rightSide">rightSide</div>
    </div>
  )
}

export default Home