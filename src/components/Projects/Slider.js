import React, { useState } from 'react'
import SliderData from './SliderData'

const Slider = () => {
  const [centralSlide, setCentralSlide] = useState(0)

  const prevProject = () => {
    if (centralSlide === 0) {
      setCentralSlide(SliderData.length - 1)
    } else setCentralSlide(centralSlide - 1)
  }

  const nextProject = () => {
    if (centralSlide === SliderData.length - 1) {
      setCentralSlide(0)
    } else setCentralSlide(centralSlide + 1)
  }

  return (
    <div id='slider'>
      {SliderData.map((project, index) => {
        return (
          <div id='slides-container' key={index}>
            <div
              className={
                index === centralSlide
                  ? 'project-slide-c current'
                  : 'project-slide-c'
              }
              style={{
                backgroundImage: `url(${SliderData[centralSlide].img})`,
              }}
            >
              <div
                className={
                  index === centralSlide
                    ? 'project-description'
                    : 'hidden-project-description'
                }
              >
                <h3>{SliderData[centralSlide].title}</h3>
                <p>{SliderData[centralSlide].description}</p>
              </div>
            </div>
            <div
              className={
                index === centralSlide
                  ? 'project-slide-l left'
                  : 'project-slide-l'
              }
              style={{
                backgroundImage: `url(${SliderData[
                  centralSlide === 0
                    ? SliderData.length - 1
                    : centralSlide - 1
                ].img
                  })`,
              }}
            ></div>
            <div
              className={
                index === centralSlide
                  ? 'project-slide-r right'
                  : 'project-slide-r'
              }
              style={{
                backgroundImage: `url(${SliderData[
                  centralSlide === SliderData.length - 1
                    ? 0
                    : centralSlide + 1
                ].img
                  })`,
              }}
            ></div>
          </div>
        )
      })}

      <div className='arrow-buttons'>
        <button id='prev' onClick={prevProject}>
          <i className='fas fa-arrow-left'></i>
        </button>
        <button id='next' onClick={nextProject}>
          <i className='fas fa-arrow-right'></i>
        </button>
      </div>
    </div>
  )
}

export default Slider
