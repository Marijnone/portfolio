import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

import "../styles/pages/case-1.scss"

//SVG's
import Ellipse from "../images/case-2/Ellipse-6.svg"
import Polygon from "../images/case-2/Polygon-2.svg"
import Rectangle from "../images/case-2/Rectangle-6.svg"
//Variants
const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
}

const imageAnimation = {
  initial: {
    opacity: 0,
    y: 0,
    // width: "50%",
  },
  enter: {
    opacity: 1,
    y: 30,
    // width: "100%",
    transition: { ...transition },
  },
}

const titleShowUp = {
  initial: { y: 62, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 2.1, delay: 2.1, ease: [0.6, 0.05, -0.01, 0.9] },
  },
}
const mainContent = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { ...transition },
  },
}

function Case2() {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
    // threshold: [0, 0.5],
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  return (
    <div>
      <motion.section variants={container} className="grid-container-case">
        <article className="fp">
          <motion.h1 variants={mainContent}>Spatial valley</motion.h1>

          <motion.div
            className="header-image"
            variants={imageAnimation}
            transition="transition"
          >
            {/* <img src={Rectangle} alt="" />
            <img src={Polygon} alt="" />
            <img src={Ellipse} alt="" /> */}

            {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="" /> */}
          </motion.div>

          <motion.div
            className="details"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={container}
          >
            <motion.p
              className="small"
              variants={titleShowUp}
              transition={transition}
            >
              Client: Personal Project
            </motion.p>
            <motion.p
              className="small"
              variants={titleShowUp}
              transition={transition}
            >
              Service: Design
            </motion.p>
          </motion.div>

          <motion.p variants={mainContent} transition={transition}>
            This is a side project where the main idea was to create a place to
            share my sparkAR filters. Since I had so much fun building these.
            I've decided to create a landing page for this service And
            development is still a WIP.
          </motion.p>
        </article>
      </motion.section>
    </div>
  )
}

export default Case2
