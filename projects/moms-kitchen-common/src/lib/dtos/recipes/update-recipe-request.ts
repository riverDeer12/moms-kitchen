export class UpdateRecipeRequest {
    isActive: boolean;
    name: string;
    description: string;
    categoryIds: string[];
    complexityLevelId: string;
}
