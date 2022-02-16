import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PostCategoryRequest} from '../../dtos/categories/post-category-request';
import {UpdateCategoryRequest} from '../../dtos/categories/update-category-request';
import {CategoryFilterRequest} from '../../dtos/categories/category-filter-request';
import {Category} from '../../dtos/categories/category';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    endpointPrefix = '/categories/';

    constructor(private http: HttpClient) {
    }

    /**
     * Endpoint connector for
     * getting categories.
     *
     * @param apiUrl api endpoint
     */
    getCategories(apiUrl: string): Observable<Category[]> {
        return this.http.get<Category[]>(apiUrl + this.endpointPrefix);
    }

    /**
     * Endpoint connector for
     * getting single category.
     *
     * @param apiUrl api endpoint
     * @param id category id
     */
    getCategory(apiUrl: string, id: string): Observable<Category> {
        return this.http.get<Category>(apiUrl + this.endpointPrefix + id);
    }

    /**
     * Endpoint connector for
     * creating new category.
     *
     * @param apiUrl api endpoint
     * @param request category request object
     */
    createCategory(apiUrl: string, request: PostCategoryRequest): Observable<Category> {
        return this.http.post<Category>(apiUrl + this.endpointPrefix, request)
    }

    /**
     * Endpoint connector for
     * creating new category.
     *
     * @param apiUrl api endpoint
     * @param id category id
     * @param request category request object
     */
    updateCategory(apiUrl: string, id: string, request: UpdateCategoryRequest): Observable<Category> {
        return this.http.put<Category>(apiUrl + this.endpointPrefix + id, request)
    }

    /**
     * Endpoint connector for
     * deleting category.
     *
     * @param apiUrl api endpoint
     * @param id category id
     */
    deleteCategory(apiUrl: string, id: string): Observable<Category> {
        return this.http.delete<Category>(apiUrl + this.endpointPrefix + id);
    }

    /**
     * Endpoint connector for
     * getting active (public) categories.
     *
     * @param apiUrl api endpoint
     */
    getActiveCategories(apiUrl: string): Observable<Category[]> {
        return this.http.get<Category[]>(apiUrl + this.endpointPrefix + 'public');
    }

    /**
     * Endpoint connector for
     * getting active (public) category details.
     *
     * @param apiUrl api endpoint
     * @param id category id
     */
    getCategoryPublicDetails(apiUrl: string, id: string) {
        return this.http.get<Category>(apiUrl + this.endpointPrefix + id + '/details');
    }

    /**
     * Endpoint connector for
     * filtering categories by filter rule.
     *
     * @param apiUrl api endpoint
     * @param request category request object
     */
    filterCategories(apiUrl: string, request: CategoryFilterRequest): Observable<Category[]> {
        return this.http.post<Category[]>(apiUrl + this.endpointPrefix + 'public-filter', request);
    }
}
