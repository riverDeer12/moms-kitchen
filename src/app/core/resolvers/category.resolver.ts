import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Category} from '../dtos/categories/category';
import {CategoriesService} from '../services/categories/categories.service';
import {Observable} from 'rxjs';

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

        return this.categoriesService.getCategory(routeId);
    }
}
