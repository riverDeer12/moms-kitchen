import { ComplexityLevel } from 'app/shared/dtos/complexity-levels/complexity-level';
import { Category } from '../categories/category';

export class Recipe {
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  description: string;
  complexityLevelId: string;
  categories: Category[];
  status: string;

  getStatus(): string {
    if (this.isDeleted) {
      return 'Deleted';
    }

    if (this.isActive) {
      return 'Active';
    } else {
      return 'Not Active';
    }
  }
}
