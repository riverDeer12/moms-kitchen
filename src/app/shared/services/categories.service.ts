import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/api-response';
import { Category } from '../dtos/categories/category';
import { PostCategoryRequest } from '../dtos/categories/post-category-request';
import { UpdateCategoryRequest } from '../dtos/categories/update-category-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  categoriesUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ApiResponse<Category>> {
    return this.http.get<ApiResponse<Category>>(this.categoriesUrl);
  }

  getCategory(categoryId: string): Observable<ApiResponse<Category>> {
    return this.http.get<ApiResponse<Category>>(this.categoriesUrl + '/' + categoryId);
  }

  createCategory(postCategoryRequest: PostCategoryRequest): Observable<ApiResponse<Category>> {
    return this.http.post<ApiResponse<Category>>(this.categoriesUrl, postCategoryRequest)
  }

  updateCategory(categoryId: string, updateCategoryRequest: UpdateCategoryRequest): Observable<ApiResponse<Category>> {
    return this.http.put<ApiResponse<Category>>(this.categoriesUrl + '/' + categoryId, updateCategoryRequest)
  }

  deleteCategory(categoryId: string): Observable<ApiResponse<Category>> {
    return this.http.delete<ApiResponse<Category>>(this.categoriesUrl + '/' + categoryId);
  }
}
