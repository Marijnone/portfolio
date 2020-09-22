import * as React from "react"

//Components
import Shapes from "../components/shapes"

// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

const Home = () => {
  const isSSR = typeof window === "undefined"

  return (
    <>
      {!isSSR && <Shapes />}
      {/* {!isSSR && <Intro />}
      {!isSSR && <Work />}
      <Music /> */}
    </>
  )
}
export default Home
