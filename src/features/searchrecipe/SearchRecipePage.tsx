import {Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Ingredient} from "../../app/models/Ingredient";
import {Recipe} from "../../app/models/Recipe";
import {Button, Form, Row, Table} from "react-bootstrap";
import {Box} from "@mui/system";
import axios from "axios";

export default function SearchRecipePage (){

    const [input, setInput] = useState<string>("");
    const [queryRecipe, setQueryRecipe] = useState<Recipe[]>();

    async function getRecipes(){
        const params = new URLSearchParams({recipeName: input});
        const results = await axios.get('https://localhost:44350/api/Recipe/GetRecipes', {params})
        setQueryRecipe(results.data)
    }
    async function deleteRecipe(recipeId:number){
        await axios.delete(`https://localhost:44350/api/Recipe/DeleteRecipe/${recipeId}`)
            .then(getRecipes);
    }

    useEffect(() => {
        getRecipes()
    },[input])

    return(
        <Box className="p-5">
            <Row><h3>Search for a recipe</h3></Row>
            <Row className="p-3">
                <Box display="flex" alignItems="center">
                    <Form.Label id="inputRecipe" className="text-primary">Search</Form.Label>
                    <Form.Control id="inputRecipe" type="text" className="m-3" value={input} onInput={e => {setInput((e.target as HTMLInputElement).value)}}/>
                </Box>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Healthy</th>
                        <th className="text-center">Spicy</th>
                        <th className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(queryRecipe) ? queryRecipe.map((recipe) => (
                        <tr key={recipe.id}>
                            <td className="text-center">{recipe.name}</td>
                            <td className="text-center">{recipe.healthy}</td>
                            <td className="text-center">{recipe.spicy}</td>
                            <td align="center">
                                <div className="btn-group btn-group-sm">
                                    <Button type="button" variant="primary" size="sm"><i className="bi bi-window-fullscreen"></i></Button>
                                    <Button type="button" variant="warning" size="sm"><i className="bi bi-pencil-square"></i></Button>
                                    <Button type="button" variant="danger" size="sm" onClick={button => {deleteRecipe(recipe.id)}}><i className="bi bi-x-square"></i></Button>
                                </div>
                            </td>

                        </tr>
                    )): null}
                    </tbody>
                </Table>
            </Row>
        </Box>

    )
}