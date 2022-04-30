import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { isTypeNode } from 'typescript';
import { Ingredient } from '../models/Ingredient';
import GroceryList from '../../features/groceryList/GroceryList';
import { Typography } from '@mui/material';

function App() {

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(()=> {
    fetch('https://localhost:5001/ingredient/ReturnAllIngredients')
      .then(response => response.json())
      .then(data => setIngredients(data))
  }, []) 

  return (
    <>
      <Typography variant='h2'>RecipeApp</Typography>
      <GroceryList ingredients = {ingredients}/>
    </>
  );
}

export default App;
