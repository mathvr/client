import { Box, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Recipe } from "../../app/models/Recipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import SearchIngredientComponent from "./SearchIngredientComponent";
import { Ingredient } from "../../app/models/Ingredient";
import { SettingsInputCompositeRounded } from "@mui/icons-material";
import axios from "axios";


const initialRecipeValues: Recipe= {
    RecipeId: 0,
    RecipeName: "",
    Healthy: "",
    Spicy: "",
    IngredientsRecipe: [],
}

export default function AddRecipePage() {

    const [recipe, setRecipe] = useState<Recipe>(initialRecipeValues);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const handlePostRecipe = async () => {

     await axios ({
        method: 'post', 
        url: "https://localhost:44350/api/Recipe/CreateRecipe",
        data: {
            Name: recipe.RecipeName,
            Healthy: recipe.Healthy,
            Spicy: recipe.Spicy,
            Ingredients: ingredients
        },
        headers: {'content-type': 'application/json'},
     });
        
    }
 

    const handleRemove = (id: number) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    }

    return (
        <Container fluid className="p-5">
            <Row>
                <Col>
                    <Form method="post">
                        <div className="border p-3">
                            <div className="row pb-2">
                                <h2 className="text-primary">Create Recipe</h2>
                                <hr/>
                        </div>
                        <Form.Group className="mb-3" controlId="InputName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Hot Dogs" id="InputName" value={recipe.RecipeName} onChange={(e) => setRecipe((prevState) => {
                                prevState.RecipeName = e.target.value; 
                                return ({...prevState })
                            }
                            )}> 
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="isHealthy">
                            <Form.Label>Healthy</Form.Label>
                            <Form.Select id="isHealthy" value={recipe.Healthy} onChange = {(e) => setRecipe((prevState) => {
                                prevState.Healthy = e.target.value;
                                return ({...prevState })
                            })}>
                                <option value="Yes">Healthy</option>
                                <option value="Moderatly">Moderatly</option>
                                <option value="No">Not Healthy</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="isSpicy">
                            <Form.Label>Spicy</Form.Label>
                            <Form.Select id="isSpicy" value={recipe.Spicy} onChange = {(e) => setRecipe((prevState) => {
                                prevState.Spicy = e.target.value;
                                return ({...prevState })
                            })}>
                                <option value="Yes">Spicy</option>
                                <option value="Moderatly">Moderatly</option>
                                <option value="No">Not Spicy</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="d-grip gap-2">
                            <Button variant="primary" size="lg" onClick={handlePostRecipe}>Submit Recipe</Button>
                        </div>
                    </div>
                    </Form>
                </Col>
                <Col className="p-4 border">
                    <Table className="table" size="sm">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">Healthy</th>
                                <th scope="col" className="text-center">Spicy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-uppercase text-center" width="50%">{recipe.RecipeName}</td>
                                <td className="text-uppercase text-center" width="30%">{recipe.Healthy}</td>
                                <td className="text-uppercase text-center" width="20%">{recipe.Spicy}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Ingredients</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredients.map((ingredient) => ( 
                                <tr key={ingredient.id}>
                                    <td scope="col" className="text-justify">{ingredient.name}</td>
                                    <td scope="col" className="text-center" ><Button onClick={button => {handleRemove(ingredient.id)}} variant="danger" size="sm"><i className="bi bi-x-square"></i></Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>          
                </Col>
            </Row>
            <Row>    
                <SearchIngredientComponent setRecipeIngredients={setIngredients}/>
            </Row>
            
        </Container>

        
    );
}
