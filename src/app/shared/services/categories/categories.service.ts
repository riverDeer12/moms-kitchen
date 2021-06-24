import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { Category } from 'app/shared/dtos/categories/category';
import { PostCategoryRequest } from 'app/shared/dtos/categories/post-category-request';
import { UpdateCategoryRequest } from 'app/shared/dtos/categories/update-category-request';
import { ICategoriesService } from 'app/shared/services/categories/i-categories-service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements ICategoriesService {

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
