
import { Category } from '../../app/models/Category';
import { ListItem, ListItemText } from "@mui/material";
import { Fragment } from "react";
import { Ingredient } from "../../app/models/Ingredient";

interface Props{
    ingredient: Ingredient;
    category: any;
}

export default function IngredientTag({ingredient}: Props){
    return(
        <>
            <ListItem key={ingredient.ingredientID}>
                <ListItemText>
                    Nom={ingredient.name}, Catégorie={ingredient.category?.categoryName}
                </ListItemText>
            </ListItem>  
        </>
    )
}