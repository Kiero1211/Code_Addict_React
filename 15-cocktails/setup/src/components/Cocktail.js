import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, img, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <Link to={`cocktail/${id}`}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <div className="cocktail-footer">
        <Link to={`cocktail/${id}`}>
          <h3>{name}</h3>
        </Link>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
