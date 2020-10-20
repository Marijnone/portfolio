import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Shapes from '../components/Shapes'
import Intro from '../components/Intro'
import Worknew from '../components/Work-new'
import About from '../components/About'
import Socials from '../components/Socials'
//Hooks

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = () => {
  //Prevent build error
  const isSSR = typeof window === 'undefined'

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio website Marijn Moviat | UX-Designer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Socials />
      {!isSSR && <Shapes />}
      {!isSSR && <Intro />}
      <Worknew />
      <About />
      {/* <Music /> */}
    </>
  )
}
export default Home
