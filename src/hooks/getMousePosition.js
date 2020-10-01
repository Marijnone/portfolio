import { useState, useEffect } from 'react'

export default function useMousePosition() {
  let [MousePosition, setMousePosition] = useState({ x: null, y: null })

  useEffect(() => {
    // console.log('test')
    // window.addEventListener('mousemove', handlePosition)
    
    // function handlePosition(e) {e
    //   setMousePosition({ x: e.pageX, y: e.pageY })
    // }
    // return () => {
    //   console.log('hello')
    //   return () => window.removeEventListener('mousemove', handlePosition)
    // }
  }, [])

  return MousePosition
}
