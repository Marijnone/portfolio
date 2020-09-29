import React, { useEffect, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import image1 from '../images/ar-guide.png'

const WorkItems = () => {
  return (
    <section className="work-items">
      <h1>Work</h1>
      <div className="container">
        <div className="menu-inner">
          <ul>
            <li>
              <Link to={'/case-1'}>
                <div className="wrapper">
                  <div className="line left flex-0">
                    {/* <div className="mask"></div> */}
                  </div>
                  <div className="title">
                    <h2>
                      <div className="text"><h2>Spark AR Guide</h2></div>
                    </h2>
                  </div>
                  <div className="floating-image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="line right flex-1"></div>
                  {/* <div className="mask right"></div> */}
                </div>
              </Link>
            </li>

            <li>
              <Link to={'/case-1'}>
                <div className="wrapper">
                  <div className="line left flex-3">
                    {/* <div className="mask"></div> */}
                  </div>
                  <div className="title">
                    <h2>
                      <div className="text">Meld verdachte situatie</div>
                    </h2>
                  </div>
                  <div className="floating-image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="line right flex-1"></div>
                  {/* <div className="mask right"></div> */}
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/case-1'}>
                <div className="wrapper">
                  <div className="line left flex-1">
                    {/* <div className="mask"></div> */}
                  </div>
                  <div className="title">
                    <h2>
                      <div className="text">Spatial Valley</div>
                    </h2>
                  </div>
                  <div className="floating-image">
                    <img src={image1} alt="" />
                  </div>
                  <div className="line right flex-3"></div>
                  {/* <div className="mask right"></div> */}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WorkItems
