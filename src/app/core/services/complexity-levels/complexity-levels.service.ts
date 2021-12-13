import { PostComplexityLevelRequest } from '../../dtos/complexity-levels/post-complexity-level-request';
import { UpdateComplexityLevelRequest } from '../../dtos/complexity-levels/update-complexity-level-request';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComplexityLevel } from 'app/core/dtos/complexity-levels/complexity-level';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplexityLevelsService {

  complexityLevelsUrl = environment.apiUrl + '/complexityLevels/';

  constructor(private http: HttpClient) {}

  getComplexityLevels(): Observable<ComplexityLevel[]> {
    return this.http.get<ComplexityLevel[]>(this.complexityLevelsUrl);
  }

  getComplexityLevel(complexityLevelId: string): Observable<ComplexityLevel> {
    return this.http.get<ComplexityLevel>(this.complexityLevelsUrl + complexityLevelId);
  }

  createComplexityLevel(request: PostComplexityLevelRequest): Observable<ComplexityLevel> {
    return this.http.post<ComplexityLevel>(this.complexityLevelsUrl, request)
  }

  updateComplexityLevel(complexityLevelId: string, request: UpdateComplexityLevelRequest):
            Observable<ComplexityLevel> {
    return this.http.put<ComplexityLevel>(this.complexityLevelsUrl + complexityLevelId, request)
  }

  deleteComplexityLevel(complexityLevelId: string): Observable<ComplexityLevel> {
    return this.http.delete<ComplexityLevel>(this.complexityLevelsUrl + complexityLevelId);
  }
}
