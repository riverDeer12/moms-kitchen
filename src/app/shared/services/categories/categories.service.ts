import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'app/shared/dtos/categories/category';
import { PostCategoryRequest } from 'app/shared/dtos/categories/post-category-request';
import { UpdateCategoryRequest } from 'app/shared/dtos/categories/update-category-request';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoriesUrl = environment.apiUrl + '/categories/';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(this.categoriesUrl + categoryId);
  }

  createCategory(postCategoryRequest: PostCategoryRequest): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl, postCategoryRequest)
  }

  updateCategory(categoryId: string, updateCategoryRequest: UpdateCategoryRequest): Observable<Category> {
    return this.http.put<Category>(this.categoriesUrl + categoryId, updateCategoryRequest)
  }

  deleteCategory(categoryId: string): Observable<Category> {
    return this.http.delete<Category>(this.categoriesUrl + categoryId);
  }

  getActiveCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl + 'active');
  }

  getCategoryPublicDetails(id: string) {
    return this.http.get<Category>(this.categoriesUrl + id + '/details');
  }
}
