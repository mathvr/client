import {Fab, Input, List, ListItem, Stack, ToggleButton} from "@mui/material";
import { fontSize } from "@mui/system";
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
            <div>
                <Input defaultValue="" className="input-ingredient"></Input>
                <Fab size="small" color="primary" aria-label="add" className="ingredient-button"> + </Fab>
            </div>
            <ListItem className={"ingredients-container"}>
                {ingredients.map((ingredient) => (
                    <>
                    <IngredientTag ingredient={ingredient}/>
                    </>
                ))}
            </ListItem>
        </>
    )
}