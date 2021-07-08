import { Category } from '../categories/category';

export class Recipe {
    recipeId: string;
    name: string;
    description: string;
    complexityLevel: string;
    categories: Category[];
}
