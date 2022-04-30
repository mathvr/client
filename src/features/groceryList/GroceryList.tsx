import { List } from "@mui/material";
import { Fragment } from "react";
import { Category } from "../../app/models/Category";
import { Ingredient } from "../../app/models/Ingredient";
import IngredientTag from "./IngredientTag";

interface Props{
    ingredients: Ingredient[];
}

export default function GroceryList({ingredients}: Props){
    return(
        <>
            <List>
                {ingredients.map((ingredient) => (
                    <>
                    <IngredientTag ingredient={ingredient} />
                    </>
                ))}
            </List>
        </>
    )
}