import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import './Home.css';
import AffichageRecettes from './AffichageRecettes';
import { SearchContext } from '../contexts/SearchContext';
import BackToTop from './BackToTop';

export default function Home() {
  // Consuming SearchContext
  const { recipes } = useContext(SearchContext);

  // Display recipes from selected ingredients

  const displayRecipes = () => {
    return recipes.map((recipe) => {
      return (
        recipe.image && (
          <AffichageRecettes
            key={recipe.id}
            titre={recipe.title}
            image={recipe.image}
            id={recipe.id}
            otherIngredients={recipe.missedIngredientCount}
          />
        )
      );
    });
  };

  return (
    <>
      <div className="home-main-container">
        <div className="home-container">
          <h1>No ideas for cooking ?</h1>
          <h2>Find awesome recipes !</h2>
          <p>Get custom recipes by filling your ingredients </p>

          <SearchBar />
        </div>
      </div>
      <div className="recipes-list">{displayRecipes()}</div>
      <BackToTop />
    </>
  );
}
