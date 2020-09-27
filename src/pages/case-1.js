import React, { useEffect, useState } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import "../styles/pages/case-1.scss"
import { getFileInfo } from "prettier"

const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

// Framer motion Variants

// const parent = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       delayChildren: 1.6,
//     },
//   },
// }

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
}

export const mainContent = {
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

const titleShowUp = {
  initial: { y: 62, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 2.1, delay: 2.1, ease: [0.6, 0.05, -0.01, 0.9] },
  },
}

//Variant for enter animation
const showUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  hidden: {
    opacity: 0,
    y: 72,
  },
}

const AnimatedPage = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
    // threshold: [0, 0.5],
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <motion.section variants={container} className="grid-container-case">
      <article className="fp">
        <motion.h2 variants={mainContent} className="blue">
          PO-33 AR Guide
        </motion.h2>
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
            Client: Teenage Engineering
          </motion.p>
          <motion.p
            className="small"
            variants={titleShowUp}
            transition={transition}
          >
            Service: UX Design & Development
          </motion.p>
        </motion.div>
        <img src="https://picsum.photos/750/400" alt="" />
        <motion.p variants={mainContent}>
          For my graduation project at the University of Applied Arts I’ve took
          on the challenge to develop an AR guide for the famous Pocket operator
          drum machine by Teenage Engineering. This was mainly focussed on UX
          Design. But in the process I realized this could not be archieved
          without propper prototyping in actual space.
        </motion.p>
        <motion.h3 variants={mainContent} className="blue">
          Opportunity & Problem
        </motion.h3>
        <p>
          Learning new studio gear always takes up a lot of time. You get
          excited to try it out and with a little experience, you can get
          started. But many of the powerful features you would only learn from
          reading the manual. This insight is based on my own experiences, but
          it's also acknowledged in one of my expert reviews. This is where I
          started to think: why not combine the manual and use AR to teach users
          about all the cool features the PO has?
        </p>
        <motion.section
          className="user-journey"
          // ref={contentRef}
          // animate={animation}
          // initial="hidden"
          // variants={showUp}
        >
          <motion.h3 className="blue">User & User Journey</motion.h3>
          <motion.h4 className="grey">Target Audience</motion.h4>
          <figure>
            <img src="https://picsum.photos/640/360" alt="" />
          </figure>
          <p>
            These personas would be most likely to be interested in a solution
            like this. They enjoy learning new stuff and are familiar with
            making music.
          </p>
          <p>
            Based on my research and talking with the target audience I've
            created these two personas. The main difference between the two is
            that they both have a different way of learning new gear. This is
            also based on my research, generally speaking, I think there are two
            types of people: people who learn by just grabbing the gear and
            start off, and one who quickly scans through the Youtube videos and
            then proceed. Both learning by doing.
          </p>
          <motion.h4 className="grey">User Journey</motion.h4>
          <p>
            How people learn new studio gear is hard to generalize. Everybody
            learns differently. Either by just diving into the new studio gear,
            watching a Youtube video, or reading the manual. This User Journey
            shows the current situation when receiving the PO.
          </p>
          <p>To provide some context this is how a user would recieve te PO</p>
          <video
            width="250px"
            height="250px"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd355ec1-d079-45b1-8843-b169b40051a5/Screen_Recording_2020-04-27_at_09.45.47.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T110227Z&X-Amz-Expires=86400&X-Amz-Signature=22da42b6227486079fd7226e4260d7d0ec69b474bb1c5be66ac82f26ed0c16e5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screen_Recording_2020-04-27_at_09.45.47.mov%22"
          ></video>
          <h4>Without AR Guide</h4>
          <img src="https://picsum.photos/640/360" alt="" />

          <h4>Findings</h4>
          <ul>
            <li>
              Instructions on the back of the PO are too short to actually get
              started this results in confusion. And getting people to go look
              for guides and tutorials
            </li>
            <li>
              When finding a Youtube video most of the times there is no
              information about what will be covered and when in the video
            </li>
            <li>
              When the user stops using the PO for a while you want to quickly
              get started again I think the AR guide could be something people
              want to come back to. Just to quickly see how to, for example,
              record drum sounds
            </li>
          </ul>
          <h4>With AR Guide</h4>
          <img src="https://picsum.photos/640/360" alt="" />

          <h4>Differences & Improvements</h4>
          <ul>
            <li>Text "Try our new AR Guide" be placed on the package</li>
            <li>
              User starts to grab his phone and scans the AR glyph/tag rather
              than just read the small instructions on the back of the PO
            </li>
            <li>
              The AR guide shows him all the functionality that's needed to get
              started. So no more browsing to Youtube, all the information
              needed in one screen.{" "}
            </li>
            <li>
              User gets rewarded with a sample pack and an option to continue to
              the next lesson
            </li>
          </ul>

          <h4>Design Challenge:</h4>
          <h3>
            How could an AR application educate musicians about the PO in a fun
            and playful way?
          </h3>
        </motion.section>
        <motion.section
          ref={contentRef}
          animate={animation}
          initial="hidden"
          variants={showUp}
          className="proto"
        >
          <motion.h3 className="blue">Prototyping</motion.h3>
          <motion.p>
            I tried many ways of prototyping AR. I've started with having no
            knowledge about this subject into slowly discovering how to develop
            actual prototypes for AR. This has been a very fun but tough
            journey, from learning about 3D software to actual programming and
            of course a lot of sketching.
          </motion.p>
          <motion.h4 className="blue">Early concept: Detailed view</motion.h4>
          <p>
            The menu was for navigating to the lessons or showing the detailed
            view, where al the functions are mapped on top of the device. I did
            not continue to develop this but focus on the introduction.
          </p>
          <motion.h4 className="blue">Early concept: Walkthrough</motion.h4>
          <motion.p>
            This early prototype was build using Torch.io which allowed simple
            interaction. This was of course not perfect because it lacked many
            features, but good enough to prototype.{" "}
            <b>The main goal was to show the user how the guide would work.</b>{" "}
            The user scans a tag and the guide appears next to the PO. Then the
            user can click on the screens and proceed to learn about the PO.
            With this prototype I could test verify if people shared my the
            vision I had.
          </motion.p>
          <motion.h4>Testing</motion.h4>
          <motion.p>
            During testing, I realized that using one hand to hold your phone
            and one hand to interact seems very awkward. I received feedback on
            the missing link between the screens and the PO. This got me
            thinking about how to develop a better way of showing users what to
            do rather than just mapping out the manual next to the screen.
          </motion.p>
          <motion.h4>Prototyping V2</motion.h4>
          <p>
            In thise protype I've tried to create a better connection with the
            device. Using AR hands to show the user what to do
          </p>
          <motion.img
            width="300px"
            height="250px"
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0250cf47-9a6f-4870-a1d5-69afae83bb96/interactions-sektch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200926T112848Z&X-Amz-Expires=86400&X-Amz-Signature=67240ee81f945a31c4786fa421599325e20b0902d1087bcb4af7331c4dc09fd7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22interactions-sektch.png%22"
            alt=""
          />
          <h3>Interaction Design</h3>
          <div className="image-container-figma"></div>
          <motion.h4>Testing</motion.h4>
          <p>
            Stake holder was postitive about this concept, but how to continue
            from here? Testing this through Figma was just not working, I needed
            to take the leap and actually build it in AR.
          </p>
          <motion.h4>Prototyping V3</motion.h4>
          <p>
            For the final prototype, I've stumbled upon SparkAR. This is the
            platform build by Facebook to give people a way to create AR effects
            for Instagram and Facebook. But for the last 6 months, they have
            really pushed many advanced features which makes the tool almost
            easy to use. My first approach to this was to design every screen I
            had from prototype v1.2 and proof the concept, show how the
            interaction would work using inside an actual AR prototype.
          </p>
          <br />
          <p>
            I started off by sketching the new interaction and then I proceeded
            to Photoshop to make the 3D assets like letters or the hands. Then I
            used sparkAR to place the object in the scene.
          </p>

          <h3>UI Design</h3>
          <p>
            I started off by sketching the new interaction and then I proceeded
            to Photoshop to make the 3D assets like letters or the hands. Then I
            used sparkAR to place the object in the scene.
          </p>
          <div className="image-container-ui"></div>

          <h4>Final Prototype</h4>
          <p>
            This is the final prototype video where the full proof of concept
            comes together. The phone is placed inside the phone holder. And the
            user starts the interaction. I did a voice-over to better explain
            whats going on
          </p>
          <div className="video-container">
            <video src="null"></video>
          </div>
        </motion.section>
      </article>
    </motion.section>
  )
}

//Page query

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "po-33.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "user-journey-wo.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "user-journey-w.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "phoneholder.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "prototype-1.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "prototype-2.png" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "early-sketch-1.png" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "early-sketch-2.png" }) {
      ...fluidImage
    }
    imageNine: file(relativePath: { eq: "early-sketch-3.png" }) {
      ...fluidImage
    }
  }
`

export default AnimatedPage
