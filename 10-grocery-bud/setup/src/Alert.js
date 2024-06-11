import React, { useEffect } from 'react'

const Alert = ({show, type, msg, removeAlert, list}) => {
  useEffect(() => {
    const timerID = setInterval(() => removeAlert(), 3000);
    return () => {
      clearInterval(timerID);
    }
  }, [list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
