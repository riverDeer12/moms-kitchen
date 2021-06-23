import { Category } from '../categories/category';

export class Recipe {
    recipeId: string;
    name: string;
    description: string;
    categories: Category[];
}
