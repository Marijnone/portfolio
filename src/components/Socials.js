import React from 'react'

import { motion } from 'framer-motion'

import github from '../images/icons/github.svg'
import linkedin from '../images/icons/linkedin.svg'

const transition = { duration: 2, ease: [0.6, -0.5, 0.01, 0.9] }

const socials = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.09,
      staggerDirection: 1,
      delay: 3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 22 },
}

function Socials() {
  return (
    <motion.figure
      className="social-banner"
      initial="hidden"
      exit="exit"
      animate="visible"
      variants={socials}
      transition={{ ...transition }}
    >
      <a rel="noopener" href="https://github.com/Marijnone">
        <motion.img variants={item} src={github} alt="Github icon"></motion.img>
      </a>

      <a rel="noopener" href="https://www.linkedin.com/in/marijn-moviat">
        <motion.img
          variants={item}
          src={linkedin}
          alt="Linkedin icon"
        ></motion.img>
      </a>
    </motion.figure>
  )
}

export default Socials
