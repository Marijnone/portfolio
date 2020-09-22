import React from 'react'
// import { useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { motion } from 'framer-motion'

export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

export const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}
//this is a variant for Framermotion
export const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

export const letter = {
  initial: {
    opacity: 0,
    y: 400,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ...transition },
  },
}

export const subtitle = {
  initial: {
    opacity: 0,
    y: 400,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 2, duration: 1.2, ...transition },
  },
}

const Intro = () => {
  return (
    <motion.section
      className="grid-container"
      animate="animate"
      initial="initial"
    >
      <motion.div className="name">
        <motion.span classname="first" variants={firstName}>
          <motion.span variants={letter}>M</motion.span>
          <motion.span variants={letter}>a</motion.span>
          <motion.span variants={letter}>r</motion.span>
          <motion.span variants={letter}>i</motion.span>
          <motion.span variants={letter}>j</motion.span>
          <motion.span variants={letter}>n</motion.span>
        </motion.span>
        <motion.span className="last" variants={lastName}>
          <motion.span variants={letter}>M</motion.span>
          <motion.span variants={letter}>o</motion.span>
          <motion.span variants={letter}>v</motion.span>
          <motion.span variants={letter}>i</motion.span>
          <motion.span variants={letter}>a</motion.span>
          <motion.span variants={letter}>t</motion.span>
        </motion.span>
      </motion.div>
      <motion.div className="prof-1">
        <motion.span className="span-prof-1" variants={lastName}>
          <motion.span variants={letter}>U</motion.span>
          <motion.span variants={letter}>X</motion.span>
          <motion.span variants={letter}>-</motion.span>
          <motion.span variants={letter}>D</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>s</motion.span>
          <motion.span variants={letter}>i</motion.span>
          <motion.span variants={letter}>g</motion.span>
          <motion.span variants={letter}>n</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>r</motion.span>
        </motion.span>
      </motion.div>
      <motion.div className="prof-2">
        <motion.span className="span-prof-2" variants={firstName}>
          <motion.span variants={letter}>F</motion.span>
          <motion.span variants={letter}>r</motion.span>
          <motion.span variants={letter}>o</motion.span>
          <motion.span variants={letter}>n</motion.span>
          <motion.span variants={letter}>t</motion.span>
          <motion.span variants={letter}>-</motion.span>
          <motion.span variants={letter}>e</motion.span>
          <motion.span variants={letter}>n</motion.span>
          <motion.span variants={letter}>d</motion.span>
          <motion.span> </motion.span>
          <motion.span className="span-prof-2" variants={lastName}>
            <motion.span variants={letter}>D</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>v</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>l</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>p</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>r</motion.span>
          </motion.span>
        </motion.span>
        <motion.h3 variants={subtitle} className="sub-title">
          Currently looking for a job as a UX Designer
        </motion.h3>
      </motion.div>
    </motion.section>
  )
}

export default Intro
