import React from 'react'
import LeftPanel from '../LeftPanel/LeftPanel'
import Content from '../Content/Content'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
          <LeftPanel/>
           <Content/>
    </div>
  )
}

export default Home