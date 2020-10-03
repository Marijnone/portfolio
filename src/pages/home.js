import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion , useAnimation } from 'framer-motion'
//Components
import Shapes from '../components/Shapes'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Worknew from '../components/Work-new'

//Hooks

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = () => {
  
  //Prevent build error
  const isSSR = typeof window === 'undefined'

  return (
    <>
      {/* {!isSSR && <Shapes />} */}
      {!isSSR && <Intro />}
      {/* {!isSSR && <Work />} */}
      <Worknew />
      {/* <Music /> */}
    </>
  )
}
export default Home
