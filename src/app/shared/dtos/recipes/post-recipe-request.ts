import { SelectorItem } from '../selector-item';

export class PostRecipeRequest {
  name: string;
  description: string;
  complexityLevelId: string;
  categoryIds: string[];
}
