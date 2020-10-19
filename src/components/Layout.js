import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'

//Styles
import '../styles/main.scss'

//Hooks

const duration = 0.6

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
//Hook call

const isSSR = typeof window === 'undefined'

const Layout = ({ children, location }) => {
  return (
    <>
      {/* <Header /> */}
      <div className="layout-container">
        {!isSSR && (
          <AnimatePresence>
            <motion.main
              key={window.location}
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {children}
            </motion.main>
            {/* <motion.div //custom cursor
              animate={{
                x: x,
                y: y,
              }}
              transition={{
                ease: "linear",
                // duration: 0.2,
              }}
              className="cursor"
            ></motion.div> */}
          </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default Layout
