import React from 'react'
import LandingPage from '../components/Home Page/LandingPage'
import AnyDesire from '../components/Home Page/AnyDesire'
import "../../styles/HomePage.css"
import QualityandRelation from '../components/Home Page/QualityandRelation'

export default function HomePage() {
  return (
    <div className='width-100'>
        <LandingPage/>
        <AnyDesire/>
        <QualityandRelation/>
    </div>
  )
}
