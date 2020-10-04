import React from 'react'
import { Frame, useAnimation } from 'framer'
// import { motion } from "framer-motion"

const Shape1 = (props) => {
  return (
    <Frame
      name={'shape1'}
      height={250}
      width={250}
      borderRadius={250}
      center
      // top={350}
      // right={100}
      // left={530}
      backgroundColor={'#B1FCEB'}
      shadow={'0px 0px 40px rgba(0, 0, 0, 0.2)'}
      animate={props.animate}
    />
  )
}
const Shape2 = (props) => {
  return (
    <Frame
      name={'shape2'}
      height={220}
      width={220}
      borderRadius={250}
      center
      left={600}
      backgroundColor={'#A499DC'}
      shadow={'0px 0px 40px rgba(0, 0, 0, 0.2)'}
      animate={props.animate}
    />
  )
}

function Parallax() {
  const shape1Animate = useAnimation()
  const shape2Animate = useAnimation()

  return (
    <>
      <div className="frame-group">
        <Frame
          name={'Group'}
          center
          width={window.innerWidth}
          height={window.innerHeight}
          background={null}
          onMouseMove={function (event) {
            let offsetX = event.clientX - window.innerWidth / 4
            let offsetY = event.clientY - window.innerWidth / 2
            console.log(offsetX, offsetY)
            // bgAnimate.start({ x: offsetX / 40, y: offsetY / 40 });
            // starAAnimate.start({ x: offsetX / 2, y: offsetY / 32 });
            shape1Animate.start({ x: offsetX / 8, y: offsetY / 2 })
            shape2Animate.start({ x: offsetX / 2, y: offsetY / 2 })
            // starBAnimate.start({ x: offsetX / 4, y: offsetY / 4 });
          }}
        >
          <Shape1 animate={shape1Animate} />
          <Shape2 animate={shape2Animate} />
        </Frame>
      </div>
    </>
  )
}

export default Parallax
