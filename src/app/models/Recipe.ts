import { List } from '@mui/material';
import { Ingredient } from "./Ingredient";

export interface Recipe{
        RecipeId: number,
        RecipeName: string,
        Healthy: string, 
        Spicy: string, 
        IngredientsRecipe: Ingredient[]
}