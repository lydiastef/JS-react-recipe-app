import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js';
import './App.css';

const App = () => {
  const APP_ID = '5b7513de';
  const APP_KEY = '863806dbd4a781e1eab29e972a023d7e';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');   /*For the search on the site*/
  const [query, setQuery] = useState('chicken');

  useEffect( () =>{
    getRecipes();
  }, [query]);   /*Making sure the site won't render/search all the time, only after hitting the submit button*/
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {   /*For the search function on the site*/
    setSearch(e.target.value);   /*This event will happen on change*/
  };

  const getSearch = e => {
    e.preventDefault();   /*Prevent the default refresh of page*/
    setQuery(search);   /*Query makes sure that the site only renders/searches after hitting submit but not every time one letter in types into the serach box*/
    setSearch('');  /*Removes the typed in word after hitting submit*/
  }

  /*In line 36 we ask for the search to happen only after hitting the submit button*/
  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'> 
        <input 
        className='search-bar' 
        type='text' 
        value={search} 
        onChange={updateSearch} 
      />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}   /*Taking info from the state above and putting it here in props. Then move it to Recipe.js*/
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
