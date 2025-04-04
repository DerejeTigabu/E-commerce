import React from 'react'

const Slider = () => {
  return (
    <div className="slider-container">
        <div className="arrow-button">
            <button className="prev-btn" >prev</button>
        </div>
        <div className="display-container">
            <div className="slide">
                <div className="img-container">
                  <img src="http:///E:\programing\react\react-projecs-folder\E-commerce\src\png.png" alt="img" />
                </div>
                <div className="info-container">
                   <div className="title">
                    <h1>Summer Sale </h1>
                    </div>
                   <div className="description">gfhgfgdnhgdnhgdndghndgn</div>
                  <button className="button">Shop Now</button>

                </div>
            </div>
        </div>
        <div className="arrow-button">
            <button className="next-btn">Next</button>
        </div>
    </div>
  )
}

export default Slider
