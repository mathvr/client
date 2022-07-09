import { List } from '@mui/material';
import { Ingredient } from "./Ingredient";

export interface Recipe{
        id: number,
        name: string,
        healthy: string,
        spicy: string,
        ingredientsRecipe: number[]
}