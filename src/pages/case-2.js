import React from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/pages/case-1.scss"

import Casefooter from "../components/case-footer"

//Variants
const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
}

const imageAnimation = {
  initial: {
    opacity: 0,
    y: 0,
    // width: "50%",
  },
  enter: {
    opacity: 1,
    y: 30,
    // width: "100%",
    transition: { ...transition },
  },
}

const titleShowUp = {
  initial: { y: 62, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 2.1, delay: 2.1, ease: [0.6, 0.05, -0.01, 0.9] },
  },
}
const mainContent = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { ...transition },
  },
}

function Case2(props) {
  return (
    <div>
      <Helmet>
        <title>Spatial.valley</title>
        <meta
          name="description"
          content="Spatial.valley a landing page for AR filters"
        />
      </Helmet>
      <motion.section variants={container} className="grid-container-case">
        <article className="fp">
          <motion.h1 variants={mainContent}>Spatial.Valley</motion.h1>

          <motion.div
            className="details"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={container}
          >
            <motion.p
              className="small"
              variants={titleShowUp}
              transition={transition}
            >
              Client: Personal Project
            </motion.p>
            <motion.p
              className="small"
              variants={titleShowUp}
              transition={transition}
            >
              Service: Design
            </motion.p>
          </motion.div>

          <motion.p variants={mainContent} transition={transition}>
            This is a side project where the main idea was to create a place to
            share my sparkAR filters. Since I've learned so much building these.
            I've decided to create a landing page for this service and
            eventually, develop a site using the JamStack, the development is
            still a WIP.
          </motion.p>
          <motion.div
            className="header-image"
            variants={imageAnimation}
            transition="transition"
          >
            <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="" />
          </motion.div>
        </article>
      </motion.section>
      <Casefooter case="-1" />
    </div>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "case-2/spatial-valley-big.png" }) {
      ...fluidImage
    }
  }
`

export default Case2
