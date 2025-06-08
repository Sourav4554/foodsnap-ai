import React from 'react'
import Header from '../../Component/Header/Header'
import About from '../../Component/About/About'
import Work from '../../Component/Works/Work'
import Uploads from '../../Component/Upload/Upload'


const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Work/>
        <Uploads/>
    </div>
  )
}

export default Home