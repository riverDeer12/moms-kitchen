import {PostComplexityLevelRequest} from '../../dtos/complexity-levels/post-complexity-level-request';
import {UpdateComplexityLevelRequest} from '../../dtos/complexity-levels/update-complexity-level-request';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ComplexityLevel} from '../../dtos/complexity-levels/complexity-level';

@Injectable({
    providedIn: 'root'
})
export class ComplexityLevelsService {

    endpointPrefix = '/complexity-levels/';

    constructor(private http: HttpClient) {
    }

    /**
     * Endpoint connector for
     * getting complexity levels.
     *
     * @param apiUrl api endpoint
     */
    getComplexityLevels(apiUrl: string): Observable<ComplexityLevel[]> {
        return this.http.get<ComplexityLevel[]>(apiUrl + this.endpointPrefix);
    }

    /**
     * Endpoint connector for
     * getting single recipe.
     *
     * @param apiUrl api endpoint
     * @param id complexity level id
     */
    getComplexityLevel(apiUrl: string, id: string): Observable<ComplexityLevel> {
        return this.http.get<ComplexityLevel>(apiUrl + this.endpointPrefix + id);
    }

    /**
     * Endpoint connector for
     * getting single recipe.
     *
     * @param apiUrl api endpoint
     * @param request complexity level request data
     */
    createComplexityLevel(apiUrl: string, request: PostComplexityLevelRequest): Observable<ComplexityLevel> {
        return this.http.post<ComplexityLevel>(apiUrl + this.endpointPrefix, request)
    }

    /**
     * Endpoint connector for
     * getting single recipe.
     *
     * @param apiUrl api endpoint
     * @param id complexity level id
     * @param request complexity level request data
     */
    updateComplexityLevel(apiUrl: string, id: string, request: UpdateComplexityLevelRequest):
        Observable<ComplexityLevel> {
        return this.http.put<ComplexityLevel>(apiUrl + this.endpointPrefix + id, request)
    }

    /**
     * Endpoint connector for
     * getting single recipe.
     *
     * @param apiUrl api endpoint
     * @param id complexity level id
     */
    deleteComplexityLevel(apiUrl: string, id: string): Observable<ComplexityLevel> {
        return this.http.delete<ComplexityLevel>(apiUrl + this.endpointPrefix + id);
    }
}
