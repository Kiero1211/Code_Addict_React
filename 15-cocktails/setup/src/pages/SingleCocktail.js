import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Link, useParams } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState({});

  const handleFetchCocktail = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const cocktail = data.drinks[0];
      if (cocktail) {
        const {
          strDrink: name,
          strDrinkThumb: img,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = cocktail;

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ]

        const newCockTail = {
          name, img, info, category, glass, instructions, ingredients
        }
        setCocktail(newCockTail);
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFetchCocktail();
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>
  }

  const {
    name, img, info, category, glass, instructions, ingredients
  } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">Back home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
