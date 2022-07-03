import {Typography} from "@mui/material";
import {Button, Container, Form, Row, Table} from "react-bootstrap";
import SearchIngredientComponent from "../addrecipe/SearchIngredientComponent";
import React, {useEffect, useState} from "react";
import {Ingredient} from "../../app/models/Ingredient";
import axios from "axios";
import {Category} from "../../app/models/Category";

export default function IngredientPage (){

    const [categories, setCategories] = useState<Category[]>()
    const [ingredientName, setIngredientName] = useState<string>("");
    const [categoryId, setCategoryId] = useState<number>(500);

    useEffect(() => {
        fetch('https://localhost:44350/api/Category/GetAllCategories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])


    //POST THE INGREDIENT TO THE SERVER
    const handlePostIngredient = async () => {
        await axios ( {
            method: 'post',
            url: "https://localhost:44350/api/Ingredients/AddIngredient",
            data: {
                CategoryId: categoryId,
                Name: ingredientName
            },
            headers: {'content-type': 'application/json'}
        })
    }

    const categoryDisp = () => {return categories?.filter(cat => cat.id == categoryId)}

    return(
        <Container className="p-5">
            <Row>
                <Form>
                    <h2 className="text-primary">Save a new ingredient to Database</h2>
                    <div className="border p-3">
                        <Form.Group className="mb-3" controlId="ingredientName">
                            <Form.Label>Ingredient Name</Form.Label>
                            <Form.Control type="text" value = {ingredientName} onInput = {e => {setIngredientName((e.target as HTMLInputElement).value)}}  placeholder="Enter the name of the Ingredient"></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ingredientCategory">
                            <Form.Label>Ingredient Category</Form.Label>
                            <h6>{categoryId}</h6>
                        </Form.Group>
                        <h4 className="text-secondary">Select Category</h4>
                        <Table className="table table-bordered table-sm" cellSpacing="0">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(categories) ? categories.map((category: Category) => (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                    <td align="center" ><Button variant="success" size="sm" onClick = {e => {setCategoryId((category.id))}} ><i className="bi bi-plus-square"></i></Button></td>
                                </tr>
                            )): null}
                            </tbody>
                        </Table>
                        <div className="d-grip gap-2">
                            <Button variant="primary" size="lg" onClick = {() => {handlePostIngredient()}}>Submit Ingredient</Button>
                        </div>
                    </div>
                </Form>
            </Row>
        </Container>
    )
}