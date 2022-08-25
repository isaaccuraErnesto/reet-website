import React, { useState, useEffect } from 'react'

const AnimatedArrow = () => {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset
        let maxScroll = document.body.scrollHeight - window.innerHeight
        if (currentScrollPos > 0 && currentScrollPos <= maxScroll) {
          setOpacity(0)
        } else {
          setOpacity(1)
        }
      }
    }
  }, [opacity])

  return (
    <div
      className='arrow'
      style={{ opacity: opacity, transition: 'all 1000ms ease-in-out' }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default AnimatedArrow
