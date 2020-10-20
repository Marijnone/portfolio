import React from 'react'
import { Frame, useAnimation } from 'framer'

const breakpoint = 620

const Shape1 = (props) => {
  return (
    <Frame
      name={'shape1'}
      height={window.innerWidth < breakpoint ? 150 : 250}
      width={window.innerWidth < breakpoint ? 150 : 250}
      borderRadius={250}
      center
      top={220}
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
      height={window.innerWidth < breakpoint ? 160 : 250}
      width={window.innerWidth < breakpoint ? 160 : 250}
      left={window.innerWidth < breakpoint ? '30%' : 520}
      borderRadius={250}
      center
      top={300}
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
