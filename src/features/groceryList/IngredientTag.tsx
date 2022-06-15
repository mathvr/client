
import { Category } from '../../app/models/Category';
import {ListItemText, Stack} from "@mui/material";
import { Fragment } from "react";
import { Ingredient } from "../../app/models/Ingredient";

interface Props{
    ingredient: Ingredient;
    }

export default function IngredientTag({ingredient}: Props){
    return(
        <>
            <ListItemText key={ingredient.ingredientID}>{ingredient.name}</ListItemText>
        </>
    )
}