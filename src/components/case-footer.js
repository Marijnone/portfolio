import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

//Variant

const showUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  rotate: {
    animate: { rotate: 3600 },
    transition: { duration: 8 },
  },
  hidden: {
    opacity: 0,
    y: 72,
  },
}

function Casefooter(props) {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
    // threshold: [0, 0.5],
  })
  useEffect(() => {
    if (inView) {
      animation.start('visible')
      animation.start('rotate')
    }
  }, [animation, inView])

  return (
    <div className="footer-wrapper">
      <motion.div
        ref={contentRef}
        initial="hidden"
        variants={showUp}
        className="foot-button"
        animate={animation}
      >
        <Link to={`/case${props.case}`}>okay next</Link>
      </motion.div>
    </div>
  )
}

export default Casefooter
