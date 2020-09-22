import React, { useState, useEffect } from 'react'
import '../styles/components/custom_cursor.scss'

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })
  const onMouseMove = (event) => {
    const { clientX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener('movemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return (
    <>
      <div
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        className="cursor"
      />
    </>
  )
}

export default CustomCursor
