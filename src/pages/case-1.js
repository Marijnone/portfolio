import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Casefooter from "../components/case-footer"

import Img from "gatsby-image"

import "../styles/pages/case-1.scss"

//Gifs
import prototypegif1 from "../images/case-1/gifs/prototype2.gif"
import prototypegif2 from "../images/case-1/gifs/prototype3.gif"
import prototypegif3 from "../images/case-1/gifs/Phoneholder-GIF.gif"
import prototypegif4 from "../images/case-1/gifs/Slider-GIF.gif"
import prototypegif5 from "../images/case-1/gifs/Tracking-GIF.gif"

const transition = { duration: 1.4, ease: [0.6, 0.05, -0.01, 0.9] }

// Framer motion Variants

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

const AnimatedPage = (props) => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
    // threshold: [0, 0.5],
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <>
      <motion.section variants={container} className="grid-container-case">
        <article className="fp">
          <motion.h1 variants={mainContent} className="blue">
            PO-33 AR Guide
          </motion.h1>
          <motion.div
            className="header-image"
            variants={imageAnimation}
            transition="transition"
          >
            <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="" />
          </motion.div>
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

          <motion.p variants={mainContent}>
            For my graduation project at the University of Applied Arts I’ve
            took on the challenge to develop an AR guide for the famous Pocket
            operator drum machine by Teenage Engineering. This was mainly
            focussed on UX Design. But in the process I realized this could not
            be archieved without propper prototyping in actual space. This is an
            in depth UX-Case study.
          </motion.p>
          <motion.h4 variants={mainContent} className="blue">
            Opportunity & Problem
          </motion.h4>
          <p>
            Learning new studio gear always takes up a lot of time. You get
            excited to try it out and with a little experience, you can get
            started. But many of the powerful features you would only learn from
            reading the manual. This insight is based on my own experiences, but
            it's also acknowledged in one of my expert reviews. This is where I
            started to think: why not combine the manual and use AR to teach
            users about all the cool features the PO has?
          </p>
          <motion.section
            className="user-journey"
            // ref={contentRef}
            // animate={animation}
            // initial="hidden"
            // variants={showUp}
          >
            <motion.h4 className="blue">User & User Journey</motion.h4>
            <motion.h5 className="grey">Target Audience</motion.h5>
            <div className="persona-container">
              <Img fluid={props.data.imageThree.childImageSharp.fluid} alt="" />
              <Img fluid={props.data.imageFour.childImageSharp.fluid} alt="" />
            </div>
            <p>
              These personas would be most likely to be interested in a solution
              like this. They enjoy learning new stuff and are familiar with
              making music.
            </p>
            <p>
              Based on my research and talking with the target audience I've
              created these two personas. The main difference between the two is
              that they both have a different way of learning new gear. This is
              also based on my research, generally speaking, I think there are
              two types of people: people who learn by just grabbing the gear
              and start off, and one who quickly scans through the Youtube
              videos and then proceed. Both learning by doing.
            </p>
            <motion.h4 className="grey">User Journey</motion.h4>
            <p>
              How people learn new studio gear is hard to generalize. Everybody
              learns differently. Either by just diving into the new studio
              gear, watching a Youtube video, or reading the manual. This User
              Journey shows the current situation when receiving the PO.
            </p>
            <p>
              To provide some context this is how a user would recieve te PO
              videos comes soon
            </p>

            <h4>Without AR Guide</h4>
            <div className="user-journey">
              <Img fluid={props.data.imageTwo.childImageSharp.fluid} alt="" />
            </div>

            <h5>Findings</h5>
            <div className="findings">
              <ul>
                <li>
                  <p>
                    Instructions on the back of the PO are too short to actually
                    get started this results in confusion. And getting people to
                    go look for guides and tutorials
                  </p>
                </li>
                <li>
                  <p>
                    When finding a Youtube video most of the times there is no
                    information about what will be covered and when in the video
                  </p>
                </li>
                <li>
                  <p>
                    When the user stops using the PO for a while you want to
                    quickly get started again I think the AR guide could be
                    something people want to come back to. Just to quickly see
                    how to, for example, record drum sounds
                  </p>
                </li>
              </ul>
            </div>
            <h4>With AR Guide</h4>
            <div className="user-journey">
              <Img fluid={props.data.imageFive.childImageSharp.fluid} alt="" />
            </div>
            <h5>Differences & Improvements</h5>
            <div className="findings">
              <ul>
                <li>
                  <p>Text "Try our new AR Guide" be placed on the package</p>
                </li>
                <li>
                  <p>
                    User starts to grab his phone and scans the AR glyph/tag
                    rather than just read the small instructions on the back of
                    the PO
                  </p>
                </li>
                <li>
                  <p>
                    The AR guide shows him all the functionality that's needed
                    to get started. So no more browsing to Youtube, all the
                    information needed in one screen.
                  </p>
                </li>
                <li>
                  <p>
                    User gets rewarded with a sample pack and an option to
                    continue to the next lesson
                  </p>
                </li>
              </ul>
            </div>
            <h4 className="black">Design Challenge:</h4>
            <div className="quote">
              <h3>
                How could an AR application educate musicians about the PO in a
                fun and playful way
              </h3>
            </div>
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
              knowledge about this subject into slowly discovering how to
              develop actual prototypes for AR. This has been a very fun but
              tough journey, from learning about 3D software to actual
              programming and of course a lot of sketching.
            </motion.p>
            <motion.h4>Early concept: Detailed view</motion.h4>
            <p>
              The menu was for navigating to the lessons or showing the detailed
              view, where al the functions are mapped on top of the device. I
              did not continue to develop this but focus on the introduction.
            </p>
            <div className="prototyping-gifs">
              <img
                className="gif-1"
                src={prototypegif1}
                alt="A Gif showing the guided view"
              />
              <img
                className="gif-2"
                src={prototypegif2}
                alt="A Gif showing the guided view"
              />
            </div>
            <motion.h4>Early concept: Introduction</motion.h4>
            <motion.p>
              This early prototype was build using Torch.io which allowed simple
              interaction. This was of course not perfect because it lacked many
              features, but good enough to prototype.{" "}
              <b>
                The main goal was to show the user how the guide would work.
              </b>{" "}
              The user scans a tag and the guide appears next to the PO. Then
              the user can click on the screens and proceed to learn about the
              PO. With this prototype I could test verify if people shared my
              the vision I had.
            </motion.p>
            <motion.h4>Testing</motion.h4>
            <motion.p>
              During testing, I realized that using one hand to hold your phone
              and one hand to interact seems very awkward. I received feedback
              on the missing link between the screens and the PO. This got me
              thinking about how to develop a better way of showing users what
              to do rather than just mapping out the manual next to the screen.
            </motion.p>
            <motion.h4>Prototyping V2</motion.h4>
            <p>
              In this protype I've tried to create a better connection with the
              device. Using AR hands to show the user what to do. Also sketched
              out the idea of using a phone holder.
            </p>
            <div className="phone-holder">
              <div className="phone-holder-item">
                <Img
                  fluid={props.data.imageSix.childImageSharp.fluid}
                  alt="sketch of a phoneholder"
                />
              </div>
              <div className="phone-holder-item">
                <Img
                  fluid={props.data.imageSeven.childImageSharp.fluid}
                  alt="sketch of the ar interaction"
                />
              </div>
            </div>
            <h4>Interaction Design</h4>
            <p>
              In this Figma prototype I wanted to communicate the idea of the PO
              characther explaining what to do
            </p>
            <div className="image-container-figma">
              <div className="figma-item">
                <Img
                  fluid={props.data.imageEight.childImageSharp.fluid}
                  alt="Figma prototype showing interaction"
                />
              </div>
              <div className="figma-item">
                <Img
                  fluid={props.data.imageNine.childImageSharp.fluid}
                  alt="Figma prototype showing interaction"
                />
              </div>
            </div>
            <motion.h4>Testing</motion.h4>
            <p>
              Stake holder was postitive about this concept, but how to continue
              from here? Testing this through Figma was just not working, I
              needed to take the leap and actually build it in AR.
            </p>
            <motion.h4>Prototyping V3</motion.h4>
            <p>
              For the final prototype, I've stumbled upon SparkAR. This is the
              platform build by Facebook to give people a way to create AR
              effects for Instagram and Facebook. But for the last 6 months,
              they have really pushed many advanced features which makes the
              tool almost easy to use. My first approach to this was to design
              every screen I had from prototype v1.2 and proof the concept, show
              how the interaction would work using inside an actual AR
              prototype.
            </p>
            <br />
            <p>
              I started off by sketching the new interaction and then I
              proceeded to Photoshop to make the 3D assets like letters or the
              hands. Then I used sparkAR to place the object in the scene. I
              came up with a new UI, using a slider seems perfect to step
              through the lessons.
            </p>
            {/* <div className="prototyping-container"></div> */}
             <h4>UI Design</h4>
            <p>
              I started off by sketching the new interaction and then I
              proceeded to Photoshop to make the 3D assets like letters or the
              hands. Then I used sparkAR to place the object in the scene.
            </p>
            <div className="image-container-ui">
              <div className="image-text">
                <h4>Slider</h4>
                <p>
                  The buttons step through the slider and show the user what to
                  press
                </p>
              </div>
              <div></div>
              <div className="image-item">
                <img
                  className="gif-3"
                  src={prototypegif4}
                  alt="A Gif showing the slider"
                />
              </div>
            </div>
            <div className="image-container-ui">
              <div className="image-item">
                <img
                  className="gif-3"
                  src={prototypegif5}
                  alt="A Gif showing the slider"
                />
              </div>
              <div></div>

              <div className="image-text">
                <h4>Tracking</h4>
                <p>
                  During testing I've figured that It was not clear enough how
                  close you should point
                </p>
              </div>
            </div>
            <div className="image-container-ui">
              <div className="image-text">
                <h4>Phoneholder</h4>
                <p>The complete interaction with the phoneholder.</p>
              </div>
              <div></div>
              <div className="image-item">
                <img
                  className="gif-3"
                  src={prototypegif3}
                  alt="A Gif showing the slider"
                />
              </div>
            </div>
            <h3 className="blue">Findings & Lessons</h3>
            <h4>Verifying</h4>
            <p>
              Due to Covid-19 I could not test this and needed to verify this
              through Facebook communities dedicated towards pocket operators.
              The feedback was very positive people liked the idea of learning a
              device like this. I've also verified this with music producers who
              were also positive about a solution like this. mentioning the
              possible capabilities of learning and making music with AR.
            </p>
            <p>
              The stakeholder was also very positive about the result, and
              stated that from this point we as a company want to see how we
              could in the near future implement solutions like this. Next step
              would be to research If people tend to learn easier with AR or
              without that was something out of the scope of this project
            </p>
            <h4>Insights current prototype</h4>
            <ul>
              <li>
                <p>People think learning like this is easier</p>
              </li>
              <li>
                <p>Text is not readable enough</p>
              </li>
              <li>
                <p>
                  Considering a better visual hierachy for the steps, different
                  color per step
                </p>
              </li>
              <li>
                <p>
                  The sound playing is distracting this should only be playing
                  in the "main" menu
                </p>
              </li>
            </ul>
            <h3 className="blue">Conclusion</h3>
            <p>
              Starting this project I spotted an opportunity, I wanted to
              enhance the musicians experience using AR. The current proof of
              concept shows many possibilities of how AR can help to learn
              people new things. I'm very happy with what I've achieved even
              with the lack of being able to the actual test the proof of
              concept. By asking the right people I've validated that this type
              of application would work and is very promising in learning people
              new things. For me, jumping on this with no prior knowledge about
              AR was sometimes scary and very uncertain but dealing with this
              resulted in learning tons of new stuff.
            </p>
          </motion.section>
        </article>
      </motion.section>
      <Casefooter case="-2" />
    </>
  )
}

//Page query

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
    imageOne: file(relativePath: { eq: "case-1/po-33.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "case-1/User-Journey-WO.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "case-1/Chris.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "case-1/Alexandra.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "case-1/User-Journey-W.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "case-1/interaction-sketch.png" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "case-1/phoneholder-4.png" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "case-1/interaction-1.png" }) {
      ...fluidImage
    }
    imageNine: file(relativePath: { eq: "case-1/interaction-2.png" }) {
      ...fluidImage
    }
    imageTen: file(relativePath: { eq: "case-1/sparkAR-1.png" }) {
      ...fluidImage
    }
    imageEleven: file(relativePath: { eq: "case-1/sparkAR-2.png" }) {
      ...fluidImage
    }
    imageTwelve: file(relativePath: { eq: "case-1/sparkAR-3.png" }) {
      ...fluidImage
    }
  }
`

export default AnimatedPage
