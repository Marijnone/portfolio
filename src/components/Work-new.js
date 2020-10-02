import React, { useEffect, useState, useRef } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"
import Image from "gatsby-image"
// import useMousePosition from '../hooks/getMousePosition'
import image1 from "../images/ar-guide.png"

let isListenerSet = false

const projectTitles = ["Spark AR Guide", "Spatial valley", "Spark AR Guide"]

//Transition
const transition = { duration: 0.8, ease: [0.6, -0.5, 0.01, 0.9] }

//Variants {
const titleSlideUp = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
}

const WorkItems = () => {
  const [hoverState, setHoverState] = useState()
  const [mouseState, setMouseState] = useState()
  const [mouseXState, setMouseXState] = useState()
  const [mouseYState, setMouseYState] = useState()

  const [workPosition, setWorkPosition] = useState({
    top: 0,
    left: 0,
  })

  const animation = useAnimation()
  const work = useRef()

  // useEffect(() => {
  //   console.log("useeffect")
  //   if (!isListenerSet) {
  //     window.addEventListener("mousemove", handlePosition)
  //     isListenerSet = true
  //   }
  // })

  // function handlePosition(e) {
  //   console.log(e.clientX)
  //   setMouseXState(e.clientX)
  //   setMouseYState(e.clientY)
  // }
  // // console.log(x, y);
  // useEffect(() => {
  //   setWorkPosition({
  //     top: work.current.getBoundingClientRect().top,
  //     top: work.current.getBoundingClientRect().left,
  //   })
  // }, [hoverState])

  return (
    <section className="work-items">
      <h1>{mouseXState}</h1>
      <motion.ul
        className="menu-inner"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={parent}
      >
        {projectTitles.map((item, index) => {
          return (
            <motion.li ref={work} key={index}>
              <Link to={`/case-${index + 1}`}>
                <div className="line left" />
                <motion.h2
                  variants={titleSlideUp}
                  transition={transition}
                  className="title"
                  // onHoverStart={() => setHoverState(index)}
                  // onHoverEnd={() => setHoverState(false)}
                >
                  <span className="text">{item}</span>
                </motion.h2>
                <div className="line right"></div>
              </Link>
              <motion.div
                className="floating-image"
                initial={{ opacity: 0 }}
                animate={
                  {
                    // opacity: hoverState === index ? 1 : 0,
                    // x: mouseXState,
                    // y: mouseYState
                  }
                }
                transition={{ ease: "linear" }}
              >
                <img src={image1} alt="" />
              </motion.div>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}

export default WorkItems
