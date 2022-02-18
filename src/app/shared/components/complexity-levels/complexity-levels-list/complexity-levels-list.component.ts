import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from '../../common/confirm-delete/confirm-delete.component';
import { EntityType } from 'app/core/constants/entity-type';
import { Table } from 'primeng/table';
import {
  CommonService,
  ComplexityLevel,
  ComplexityLevelsService,
} from 'moms-kitchen-common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-complexity-levels-list',
  templateUrl: './complexity-levels-list.component.html',
  styleUrls: ['./complexity-levels-list.component.scss'],
})
export class ComplexityLevelsListComponent implements OnInit {
  complexityLevels: ComplexityLevel[];
  loadingData: boolean;

  constructor(
    private complexityLevelsService: ComplexityLevelsService,
    private commonService: CommonService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit(): void {
    this.getComplexityLevels();
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Complexity levels list',
      'List of all registered complexity levels'
    );
  }

  getComplexityLevels(): void {
    this.loadingData = true;

    this.complexityLevelsService
      .getComplexityLevels(environment.apiUrl)
      .subscribe(
        (response: ComplexityLevel[]) => {
          this.complexityLevels = response.map((x) =>
            Object.assign(new ComplexityLevel(), x)
          );
          this.loadingData = false;
        },
        () => {}
      );
  }

  confirmDelete(complexityLevelId: string): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = complexityLevelId;
    modalRef.componentInstance.entityType = EntityType.COMPLEXITY_LEVELS;
    modalRef.componentInstance.returnUrl = '/admin/complexity-levels';

    modalRef.result.then(
      () => {
        this.getComplexityLevels();
      },
      () => {}
    );
  }

  goToInfoPage(id: string): void {
    this.router.navigateByUrl('/admin/complexity-levels/info/' + id);
  }

  goToEditPage(id: string): void {
    this.router.navigateByUrl('/admin/complexity-levels/edit/' + id);
  }

  goToConfirmDeletePage(id: string): void {
    this.router.navigateByUrl('/admin/complexity-levels/delete/' + id);
  }

  clear(table: Table) {
    table.clear();
  }
}
