import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Category} from '../../../../projects/moms-kitchen-common/src/lib/dtos/categories/category';
import {Observable} from 'rxjs';
import {CategoriesService} from '../../../../projects/moms-kitchen-common/src/lib/services/categories/categories.service';
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
