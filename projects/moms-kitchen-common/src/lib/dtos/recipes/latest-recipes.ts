import { Category } from '../categories/category';
import { Recipe } from './recipe';

export class LatestRecipes {
  latest: Recipe[];
  mostPopularCategory: Category;
  secondMostPopularCategory: Category;
  thirdMostPopularCategory: Category;
}
