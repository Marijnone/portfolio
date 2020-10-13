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
  initial: { y: 72, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
}

const showUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {when:"beforeChildren", staggerChildren: 1.4 , delayChildren: 0.4, duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  hidden: {
    opacity: 0,
    y: 72,
  },
}


const maskAnimation = {
  initial: { width: "100%" },
  animate: { width: 0 },
}

const WorkItems = () => {
  const animation = useAnimation()
 
  const [contentRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
  })
  const [hoverState, setHoverState] = useState()
  // const [mouseXState, setMouseXState] = useState()
  // const [mouseYState, setMouseYState] = useState()

  // const [workPosition, setWorkPosition] = useState({
  //   top: 0,
  //   left: 0,
  // })

  //HOOKS

  const work = useRef()

  useEffect(() => {
    if (inView) {
      animation.start("visible")
      animation.start("animate")
      // animation.start("initial")
    }
  }, [animation, inView])

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
    <>
    <div className="layout-container">
       <h1>Work</h1>
    </div>

    <motion.section className="work-items">
      <motion.ul
        ref={contentRef}
        animate={animation}
        initial="hidden"
        exit="exit"
        variants={showUp}
        transition={{...transition}}
        className="menu-inner"
      >
        {projectTitles.map((item, index) => {
          return (
            <motion.li key={index}>
              <Link to={`/case-${index + 1}`}>
                <div className="line left">
                  <motion.div
                    variants={maskAnimation}
                    transition={{ ...transition, duration: 2 }}
                    className="mask left"
                  />
                </div>
                <motion.h2
                  variants={titleSlideUp}
                  transition={transition}
           
                  // className="title"
                  // onHoverStart={() => setHoverState(index)}
                  // onHoverEnd={() => setHoverState(false)}
                >
                  <span className="text">{item}</span>
                </motion.h2>
                <div className="line right">
                  <motion.div
                    variants={maskAnimation}
                    transition={{ ...transition, duration: 2 }}
                    className="mask right"
                  />
                </div>
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
    </motion.section>
    </> 
  )
}

export default WorkItems
