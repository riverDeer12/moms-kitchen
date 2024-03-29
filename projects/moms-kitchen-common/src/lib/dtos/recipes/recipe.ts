import { Category } from '../categories/category';

export class Recipe {
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  name: string;
  description: string;
  complexityLevelId: string;
  categories: Category[];
  status: string;
  updatedAt: Date;

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
