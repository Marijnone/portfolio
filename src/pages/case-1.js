import React from 'react'
import { motion } from 'framer-motion'

import '../styles/pages/case-1.scss'

import Layout from '../components/Layout'

const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

const container = {
  enter: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
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
    transition: { duration: 1.1, ...transition },
  },
}

const AnimatedPage = () => (
  <motion.section variants={container} className="grid-container-case">
    <article className="fp">
      <motion.h2 variants={mainContent} className="blue">
        PO-33 AR Guide
      </motion.h2>
      <div className="details">
        <p className="small">Client: Teenage Engineering</p>
        <p className="small">Service: UX Design & Development</p>
      </div>
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
