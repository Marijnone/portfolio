import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Cursor from '../components/CustomCursor'
import '../styles/main.scss'

const duration = .6


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

const Layout = ({ children, location}) => (
  <>
    <Header />

    <div className={`layout-container${children.isCase ? '-case' : ''}`}>
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
        </AnimatePresence>
      )}
    </div>
  </>
)

export default Layout
