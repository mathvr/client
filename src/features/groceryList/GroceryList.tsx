import { Fab, Input, List, Stack, ToggleButton } from "@mui/material";
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
            <form>
                <Input defaultValue="" className="input-ingredient"></Input>
                <Fab size="small" color="primary" aria-label="add" className="ingredient-button"> + </Fab>
            </form>
            <Stack spacing={1}>
                {ingredients.map((ingredient) => (
                    <>
                    <IngredientTag ingredient={ingredient}/>
                    </>
                ))}
            </Stack>
        </>
    )
}