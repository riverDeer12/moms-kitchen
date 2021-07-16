export class Category {
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  description: string;
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
