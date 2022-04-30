import { Category } from "./Category";

export interface Ingredient{
        ingredientID: number;
        categoryID: number;
        name: string;
        category?: Category;
}