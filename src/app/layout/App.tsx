import { useEffect, useState } from 'react';
import { Ingredient } from '../models/Ingredient';
import {CssBaseline} from '@mui/material';
import Header from "./Header";
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import IngredientPage from '../../features/ingredient/IngredientPage';
import AboutPage from '../../features/about/AboutPage';
import SearchRecipePage from '../../features/searchrecipe/SearchRecipePage';
import AddRecipePage from "../../features/addrecipe/AddRecipePage";

function App() {

  const [ingredients, setIngredients] = useState<Ingredient[]>([ ]);

  useEffect(()=> {
    fetch('https://localhost:5001/ingredient/ReturnAllIngredients')
      .then(response => response.json())
      .then(data => setIngredients(data))
  }, []) 

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/ingredient' element={<IngredientPage/>} />
        <Route path='/searchRecipe' element={<SearchRecipePage/>} />
        <Route path='/addRecipe' element={<AddRecipePage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </>
      
  )
}

export default App;
