import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from '../components/Nav'
import '../styles/main.scss'

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}
const isSSR = typeof window === "undefined"

const Layout = ({ children, location }) => (
  <>
    <Nav />
    <div
      style={{
        margin: `60px auto 0`,
        maxWidth: 960,
        padding: `1em`,
      }}
    >
      
      {!isSSR && 
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
        }
    </div>
  </>
)

export default Layout
