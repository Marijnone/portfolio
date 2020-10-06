import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

//Variants

const showUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  hidden: {
    opacity: 0,
    y: 22,
  },
}

function About() {
  const animation = useAnimation()
  const [contentRef, inView0] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  })

  useEffect(() => {
    if (inView0) {
      animation.start("visible")
    }
  }, [animation, inView0])

  return (
    <motion.section
      ref={contentRef}
      animate={animation}
      variants={showUp}
      initial="hidden"
      className="layout-container-about"
    >
      <motion.h1 variants={showUp} transition={transition}>
        About
      </motion.h1>

      <motion.article>
        <motion.p variants={showUp} transition={transition}>
          My name is Marijn Moviat, a Junior UX Designer that knows how to code.
          Recently graduated from The Bachelor Communication & Multimedia Design
          at the University of Applied Sciences in Amsterdam. I like to bring my
          technical knowledge to empower User Experience.
        </motion.p>
        <motion.p variants={showUp}>
          During my studies, I've focussed on UX but mostly the technical side,
          building products with Javascript, Node.js, React. Being an
          ever-learning designer I've realized that I enjoy optimizing UX a
          little more than coding 24/7. I'm always looking for new ways to solve
          a problem and don't step back from a technical challenge. Currently
          I'm learning about Augmented Reality and UX.
        </motion.p>
        <motion.p variants={showUp}>
          When I'm not designing or coding, I'm making music under my lo-fi
          hip-hop artist name: soder. which is a two-man project.
        </motion.p>
        <motion.p variants={showUp}>
          I'm currently looking for a UX adventure that takes me to the next
          level. Working with motivating and skilled people creating meaningful
          user experiences.
        </motion.p>
      </motion.article>
    </motion.section>
  )
}

export default About
