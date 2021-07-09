import { PostComplexityLevelRequest } from './../../dtos/complexity-levels/post-complexity-level-request';
import { UpdateComplexityLevelRequest } from './../../dtos/complexity-levels/update-complexity-level-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { PostCategoryRequest } from 'app/shared/dtos/categories/post-category-request';
import { UpdateCategoryRequest } from 'app/shared/dtos/categories/update-category-request';
import { ComplexityLevel } from 'app/shared/dtos/complexity-levels/complexity-level';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplexityLevelsService {

  complexityLevelsUrl = environment.apiUrl + '/complexityLevels';

  constructor(private http: HttpClient) {}

  getComplexityLevels(): Observable<ComplexityLevel[]> {
    return this.http.get<ComplexityLevel[]>(this.complexityLevelsUrl);
  }

  getComplexityLevel(complexityLevelId: string): Observable<ComplexityLevel> {
    return this.http.get<ComplexityLevel>(this.complexityLevelsUrl + '/' + complexityLevelId);
  }

  createComplexityLevel(request: PostComplexityLevelRequest): Observable<ComplexityLevel> {
    return this.http.post<ComplexityLevel>(this.complexityLevelsUrl, request)
  }

  updateComplexityLevel(complexityLevelId: string, request: UpdateComplexityLevelRequest):
            Observable<ApiResponse<ComplexityLevel>> {
    return this.http.put<ApiResponse<ComplexityLevel>>(this.complexityLevelsUrl + '/' + complexityLevelId, request)
  }

  deleteComplexityLevel(complexityLevelId: string): Observable<ApiResponse<ComplexityLevel>> {
    return this.http.delete<ApiResponse<ComplexityLevel>>(this.complexityLevelsUrl + '/' + complexityLevelId);
  }
}
