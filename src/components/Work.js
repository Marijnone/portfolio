import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import image1 from '../images/ar-guide.png'

const transition = { duration: 8.8, ease: [0.6, -0.05, 0.01, 0.9] }

//Variants

const titleShowUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}

const Work = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px',
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <motion.section
      className="work"
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <h2>Work</h2>
      <motion.div className="items">
        <div className="work-item-1">
          <motion.svg
            width="440"
            height="398"
            viewBox="0 0 440 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <a href="/case-1">
              <circle cx="241" cy="199" r="199" fill="#C4C4C4" />
              <circle cx="199" cy="199" r="199" fill="#B1FCEB" />
              <motion.image height="100%" width="100%" />
            </a>
          </motion.svg>
          <div className="title">
            <h4>AR Guide</h4>
            <div className="desc">
              {' '}
              <p>floating text</p>
            </div>
          </div>
        </div>
        <div className="work-item-2">
          <motion.svg
            drag="x"
            dragConstraints={{ left: 12, right: 12, top: 12, bottom: 12 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            width="440"
            height="398"
            viewBox="0 0 440 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <a href="/case-2">
              <motion.circle cx="241" cy="199" r="199" fill="#C4C4C4" />
              <circle cx="199" cy="199" r="199" fill="#A499DC" />
            </a>
          </motion.svg>
          <div className="title">
            <h4>Spatial Valley</h4>
            <div className="desc">
              {' '}
              <p>floating text</p>
            </div>
          </div>
        </div>
        <div className="work-item-3">
          <motion.svg
            drag="x"
            dragConstraints={{ left: 12, right: 12, top: 12, bottom: 12 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            width="440"
            height="398"
            viewBox="0 0 440 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <a href="/case-1">
              <circle cx="241" cy="199" r="199" fill="#C4C4C4" />
              <circle
                cx="199"
                cy="199"
                r="199"
                fill="#0C3DEE"
                fill-opacity="0.93"
              />
            </a>
          </motion.svg>
          <div className="title">
            <h4>AR Guide</h4>
            <div className="desc">
              <p>floating text</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
export default Work
