import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color, index, hexColor}) => {
  const {rgb, weight} = color;
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`
  return (
    <article 
      style={{backgroundColor: `rgb(${bcg})`}} 
      className={`color ${index > 10 ? "color-light" : null}`}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  )
}

export default SingleColor
