import React from 'react'

//Components
import Shapes from '../components/Shapes'
import Intro from '../components/Intro'
import Worknew from '../components/Work-new'
import About from '../components/About'
//Hooks

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = () => {
  
  //Prevent build error
  const isSSR = typeof window === 'undefined'

  return (
    <>
      {!isSSR && <Shapes />}
      {!isSSR && <Intro />}
      <Worknew />
      <About />
      {/* <Music /> */}
    </>
  )
}
export default Home
