import React from 'react'
import Academic from './Academic'
import News from './News'
import Location from './Location'
import CAROUSEL from './CAROUSEL'
import NavBar from '../shared/navbar'

function Home() {
  return (
    <div>
      <NavBar/>
      <CAROUSEL/>
      <Academic/>
      <News/>
      <Location/>
    </div>
  )
}

export default Home
