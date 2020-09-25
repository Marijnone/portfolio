import React, { useEffect, useState } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import image1 from "../images/ar-guide.png"

const transition = { duration: 8.8, ease: [0.6, -0.05, 0.01, 0.9] }

//Variants

const titleShowUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}

const Work = (x, y) => {
  const [hoverState, setHoverState] = useState()
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    root: null,
    rootMargin: "-100px",
  })

  //By default inView is false when its set to true it will fire of the useeffect
  useEffect(() => {
    if (inView) {
      animation.start("visible")
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
      <motion.h2
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
        Work
      </motion.h2>
      <motion.div className="items">
        <div className="work-item-1">
          <motion.div
            className="floating-image"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x,
              y: y,
            }}
          >
            <img src={image1} alt="" />
          </motion.div>
          <motion.svg
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            width="440"
            height="398"
            viewBox="0 0 440 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <a href="/case-1">
              <circle cx="241" cy="199" r="199" fill="#C4C4C4" />
              <circle cx="199" cy="199" r="199" fill="#B1FCEB" />
            </a>
          </motion.svg>
          <motion.div
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
            className="title"
          >
            <h4 class="grey">AR Guide</h4>
            <div className="desc">
              <p>client:</p>
            </div>
          </motion.div>
        </div>

        <motion.div className="work-item-2">
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
          <motion.div
            className="title"
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
            className="title"
          >
            <h4 class="grey">Spatial Valley</h4>
            <div className="desc">
              {" "}
              <p>floating text</p>
            </div>
          </motion.div>
        </motion.div>
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
          <motion.div
            className="title"
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
              hidden: {
                opacity: 0,
                y: 72,
              },
            }}
            className="title"
          >
            <h4 class="grey">Meld verdachte situatie</h4>
            <div className="desc">
              <p>floating text</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
export default Work
