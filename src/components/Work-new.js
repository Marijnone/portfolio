import React, { useEffect, useState } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"
import Image from "gatsby-image"
// import useMousePosition from '../hooks/getMousePosition'
import image1 from "../images/ar-guide.png"

let isListenerSet = false

const projectTitles = ["Spark AR Guide", "Spatial valley", "Spark AR Guide"]

const WorkItems = () => {
  const [hoverState, setHoverState] = useState()
  const [mouseState, setMouseState] = useState()
  const animation = useAnimation()
  
  useEffect(() => {
    console.log('useeffect')
    if (!isListenerSet) {
      window.addEventListener('mousemove', handlePosition)
      isListenerSet = true
    }
  })
  // console.log(x, y);

  function handlePosition(e) {
    // console.log(e.clientX)
    setMouseState(e.clientX)
  }

  return (
    <section className="work-items">
      <h1>{ mouseState }</h1>
      <ul className="menu-inner">
        {projectTitles.map((item, index) => {
          return (
            <li key={ index }>
              <Link to={`/case-${index + 1}`}>
                <div className="line left" />
                <motion.h2
                  className="title"
                  onHoverStart={() => setHoverState(index)}
                  onHoverEnd={() => setHoverState(false)}
                >
                  <span className="text">{item}</span>
                </motion.h2>
                <div className="line right"></div>
              </Link>
              <motion.div
                  className="floating-image"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoverState === index ? 1 : 0,
                    // x: x,
                    // y: y,
                  }}
                  transition={{ ease: "linear" }}
                >
                  <img src={image1} alt="" />
                </motion.div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default WorkItems
