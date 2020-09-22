import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
//Components
import Shapes from '../components/Shapes'
import Intro from '../components/Intro'
import Work from '../components/Work'

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  })

  //Prevent build error
  const isSSR = typeof window === 'undefined'

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])
  return (
    <>
      {!isSSR && <Shapes />}
      {!isSSR && <Intro />}
      {!isSSR && <Work />}
      {/* <Music /> */}
    </>
  )
}
export default Home
