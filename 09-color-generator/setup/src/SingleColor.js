import React, { useState, useEffect, useRef } from 'react'

const SingleColor = ({color, index, hexColor}) => {
  const [alert, setAlert] = useState(false);

  const {rgb, weight} = color;
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    }
  }, [alert])

  return (
    <article 
      style={{backgroundColor: `rgb(${bcg})`}} 
      className={`color ${index > 10 ? "color-light" : null}`}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
