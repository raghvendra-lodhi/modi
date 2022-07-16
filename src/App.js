import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Mid from './components/Mid'
import SubFooter from './components/SubFooter'
import SubMid from './components/SubMid'
import LastFooter from './components/LastFooter'
import Fslider from './components/Fslider'

function App() {
  return (
    <div>
      <Home/>
      <Mid/>
      <Fslider/>
      <SubMid/>
      <SubFooter/>
      <Footer/>
      <LastFooter/>
    </div>
  )
}

export default App