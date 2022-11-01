import React from 'react';

const Recipe = ({title,calories,image, ingredients}) => {   /*Moving title, calories, image and ingredients from app.js to this component with props*/
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => ( 
                    <li>{ingredient.text}</li>    
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=''/>
        </div>
    );
};

export default Recipe;
