import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Category, CategoriesService} from 'moms-kitchen-common';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CategoryResolver implements Resolve<Category> {

    constructor(private router: Router,
                private categoriesService: CategoriesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/categories').then();
            return;
        }

        return this.categoriesService.getCategory(environment.apiUrl, routeId);
    }
}
