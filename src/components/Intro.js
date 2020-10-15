import React from "react"
import { motion } from "framer-motion"

export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

export const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.08,
      staggerDirection: 1,
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
      delayChildren: 0.8,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

export const letter = {
  initial: {
    opacity: 0,
    y: 95,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 4.2, ...transition },
  },
}

export const subtitle = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 40,
    transition: { delay: 1.9, duration: 2.6, ...transition },
  },
}

export const name = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.6, ...transition },
  },
}

const Intro = () => {
  const myFirstName = Array.from("Marijn")

  const myLastName = Array.from("Moviat")

  const prof1 = Array.from("Front-End")
  const prof2 = Array.from("Developer")

  const prof3 = Array.from("UX-Designer")

  return (
    <motion.section
      className="grid-container"
      animate="animate"
      initial="initial"
    >
      <motion.div className="name">
        <motion.span classname="first" variants={name}>
          {myFirstName.map((str, index) => (
            <motion.span  key={index} >
              {str === " " ? "\u00A0" : str}
            </motion.span>
          ))}
        </motion.span>
        <motion.span className="last" variants={name}>
          {myLastName.map((str, index) => (
            <motion.span  key={index}>
              {str === " " ? "\u00A0" : str}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
      <motion.div className="prof-1">
        <motion.span className="span-prof-1" variants={lastName}>
          {prof1.map((str, index) => (
            <motion.span variants={letter} key={index}>
              {str === " " ? "\u00A0" : str}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
      <motion.div className="prof-2">
        <motion.span className="span-prof-2" variants={firstName}>
        {prof2.map((str, index) => (
            <motion.span variants={letter} key={index}>
              {str === " " ? "\u00A0" : str}
            </motion.span>
          ))}
        </motion.span>
        
        <motion.div className="prof-3">
        <motion.span className="span-prof-2" variants={lastName}>
          {prof3.map((str, index) => (
            <motion.span variants={letter} key={index}>
              {str === " " ? "\u00A0" : str}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
        <motion.h4 variants={subtitle} className="grey">
          Currently looking for a job as a UX Designer
        </motion.h4>
      </motion.div>
    </motion.section>
  )
}

export default Intro
