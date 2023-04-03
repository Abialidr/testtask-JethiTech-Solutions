import React from 'react'
import NaviGationBar from '../Components/Nav'
import DisplayDiv from '../Components/DisplayDiv'
import WhoWeAre from '../Components/WhoWeAre'
import OurOfferings from '../Components/OurOfferings'
import OurTeam from '../Components/OurTeam'
import Blogs from '../Components/Blogs'
import Connect from '../Components/Connect'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <DisplayDiv/>
      <WhoWeAre/>
      <OurOfferings/>
      <OurTeam/>
      <Blogs/>
      <Connect/>
    </div>
  )
}

export default Home
