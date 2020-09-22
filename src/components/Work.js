import React from "react"
import { motion } from "framer-motion"

import image1 from "../images/ar-guide.png"

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const Work = () => {
  const variants = {
    variantA: {
      scale: 0.9,
      rotate: 0,
      transition: { duration: 1.2, ...transition },
      y: 0
    },
    variantB: {
      scale: 1.0,
      rotate: 9
    },
    variantC: {
      y: 1
    }
  }

  return (
    <section className="work">
      <h2>Work</h2>
      <div className="items">
        <div className="work-item-1">
          <motion.svg
            drag="x"
            dragConstraints={{ left: 12, right: 12, top: 12, bottom: 12 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            width="440"
            height="398"
            viewBox="0 0 440 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={"variantA"}
            whileHover={"variantB"}
            variants={variants}
          >
            <a href="/">
              <circle cx="241" cy="199" r="199" fill="#C4C4C4" />
              <circle cx="199" cy="199" r="199" fill="#B1FCEB" />
              <motion.image
                initial={{ opacity: 0, y: 30, transition: transition }}
                whileHover={{ opacity: 1, y: -30.2 }}
                height="100%"
                width="100%"
                xlink
                href={image1}
              />
            </a>
          </motion.svg>
          <div className="title">
            <h4>AR Guide</h4>
          </div>
          <div className="desc">
            {" "}
            <p>floating text</p>
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
            initial={"variantA"}
            whileHover={"variantB"}
            variants={variants}
          >
            <a href="/case-2">
              <motion.circle cx="241" cy="199" r="199" fill="#C4C4C4" />
              <circle cx="199" cy="199" r="199" fill="#A499DC" />
            </a>
          </motion.svg>
          <div className="title">
            <h4>Spatial Valley</h4>
            <div className="desc">
              {" "}
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
            initial={"variantA"}
            whileHover={"variantB"}
            variants={variants}
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
      </div>
    </section>
  )
}
export default Work
