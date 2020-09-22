import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/Layout"
 
import "../styles/pages/case-1.scss"

const container = {
  enter: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const item = {
  initial: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedPage = () => (
  <section className="grid-container-case">
    <h2>Animated After Page Mount</h2>
    
      <motion.ul variants={container}>
        <motion.p variants={item}>I am</motion.p>
        <motion.p variants={item}>staggered content</motion.p>
        <motion.p variants={item}>that animates in</motion.p>
        <motion.p variants={item}>after the initial</motion.p>
        <motion.p variants={item}>page fade</motion.p>
      </motion.ul>
    </section>

);

export default AnimatedPage;
