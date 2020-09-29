import { useState, useEffect } from 'react'

export default function UseMousePosition() {
  let [MousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }
    return () => {
      window.addEventListener('mousemove', handlePosition)
      return () => window.removeEventListener('mousemove', handlePosition)
    }
  }, [])

  return MousePosition
}
