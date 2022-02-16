import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ComplexityLevel} from '../../../../projects/moms-kitchen-common/src/lib/dtos/complexity-levels/complexity-level';
import {ComplexityLevelsService} from '../../../../projects/moms-kitchen-common/src/lib/services/complexity-levels/complexity-levels.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ComplexityLevelResolver implements Resolve<ComplexityLevel> {

    constructor(private router: Router,
                private complexityLevelsService: ComplexityLevelsService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComplexityLevel> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/categories').then();
            return;
        }

        return this.complexityLevelsService.getComplexityLevel(environment.apiUrl, routeId);
    }
}
