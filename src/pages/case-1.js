import React from "react"
import { motion } from "framer-motion"

import "../styles/pages/case-1.scss"

import Layout from "../components/Layout"

const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

// Framer motion Variants

// const parent = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       delayChildren: 1.6,
//     },
//   },
// }

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
}

export const mainContent = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {  ...transition },
  },
}

const titleShowUp = {
  initial: { y: 70, opacity: 0 },
  animate: { y: 0, opacity: 1 , transition: { duration: 1.1, delay: 2.1, ease: [0.6, 0.05, -0.01, 0.9]}},
  
}

const AnimatedPage = () => (
  <motion.section variants={container} className="grid-container-case">
    <article className="fp">
      <motion.h2 variants={mainContent} className="blue">
        PO-33 AR Guide
      </motion.h2>
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
          Client: Teenage Engineering
        </motion.p>
        <motion.p
          className="small"
          variants={titleShowUp}
          transition={transition}
        >
          Service: UX Design & Development
        </motion.p>
      </motion.div>
      <motion.p variants={mainContent}>
        For my graduation project at the University of Applied Arts I’ve took on
        the challenge to develop an AR guide for the famous Pocket operator drum
        machine by Teenage Engineering. This was mainly focussed on UX Design.
        But in the process I realized this could not be archieved without
        propper prototyping in actual space.
      </motion.p>
      <motion.h3 variants={mainContent} className="blue">
        Process & research
      </motion.h3>
    </article>
  </motion.section>
)

export default AnimatedPage
