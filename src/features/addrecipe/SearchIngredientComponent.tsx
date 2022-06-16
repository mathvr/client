import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import React from 'react';
import { valueToPercent } from "@mui/base";
import { Box } from "@mui/system";
import { Recipe } from "../../app/models/Recipe";
import { Ingredient } from "../../app/models/Ingredient";

interface Props{
    setRecipeIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>,
} 

export default function SearchIngredientComponent ({setRecipeIngredients}: Props) {
        
    const [input, setInput] = useState<string>("");
    const [input2, setInput2] = useState<string>("");
    const [queryIngredients, setQueryIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        fetch('https://localhost:7153/api/Ingredients/SearchByName?'+ new URLSearchParams({name:input, name2:input2}))
        .then(response => response.json())
        .then(data => setQueryIngredients(data))
    }, [input, input2])

    function addIngredientToRecipe(inputIngredient: Ingredient){
            setRecipeIngredients(prevState => [...prevState, inputIngredient]);
        }

    return(
        <div className="p-4">
            <h2 className="text-secondary">Add an ingredient</h2>
            <Box display="flex">
                <Box display="flex" alignItems="center">
                    <Form.Label id="inputIngredient" className="text-primary">First Criteria</Form.Label>
                    <Form.Control id="inputIngredient" type="text" className="m-3" value={input} onInput={e => {setInput((e.target as HTMLInputElement).value)}}/>
                </Box>
                <Box display="flex" alignItems="center">
                    <Form.Label id="inputIngredient2" className="text-primary">Second Criteria</Form.Label>
                    <Form.Control id="inputIngredient2" type="text" className="m-3 input-primary" value={input2} onInput={e => {setInput2((e.target as HTMLInputElement).value)}}/>
                </Box>
            </Box>
           
            
            <Table className="table table-bordered table-sm" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-center">Category</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(queryIngredients) ? queryIngredients.map((ingredient) => (
                        <tr key={ingredient.ingredientID}>
                            <td>{ingredient.name}</td>
                            <td align="center">{ingredient.category?.categoryID}</td>
                            <td align="center" ><Button variant="success" size="sm" onClick={button => {addIngredientToRecipe(ingredient)}}><i className="bi bi-plus-square"></i></Button></td>
                        </tr>
                    )): null}
                </tbody>
            </Table>
        </div>
        
    )
}