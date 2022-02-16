export class ComplexityLevel {
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  description: string;
  complexityWeight: number;
  createdAt: Date;
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
