import React, { useState } from "react";
import RECIPES from "./RECIPES";

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = RECIPES.filter((recipe) => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) return true;

    return (
      recipe.title.toLowerCase().includes(search) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(search)
      )
    );
  });

  return (
    <div>
      <h2>Filtering recipes</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={searchTerm}
      />
      <ul>
        {filteredRecipes.map(({ id, title }) => (
          <li key={id}>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;