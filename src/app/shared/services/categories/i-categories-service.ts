import { PostCategoryRequest } from '../../dtos/categories/post-category-request';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { Category } from 'app/shared/dtos/categories/category';
import { Observable } from 'rxjs';
import { UpdateCategoryRequest } from 'app/shared/dtos/categories/update-category-request';

@Injectable()
  export abstract class ICategoriesService {
    abstract getCategories(): Observable<ApiResponse<Category>>;
    abstract getCategory(categoryId: string): Observable<ApiResponse<Category>>;
    abstract createCategory(postCategoryRequest: PostCategoryRequest): Observable<ApiResponse<Category>>;
    abstract updateCategory(categoryId: string, updateCategoryRequest: UpdateCategoryRequest): Observable<ApiResponse<Category>>;
    abstract deleteCategory(categoryId: string): Observable<ApiResponse<Category>>;
  }
