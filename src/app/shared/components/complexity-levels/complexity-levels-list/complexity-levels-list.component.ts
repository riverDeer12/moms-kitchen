import { Router } from '@angular/router';
import { CommonService } from './../../../services/common/common.service';
import { ComplexityLevelsService } from './../../../services/complexity-levels/complexity-levels.service';
import { Component, OnInit } from '@angular/core';
import { ComplexityLevel } from 'app/shared/dtos/complexity-levels/complexity-level';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDeleteComponent } from '../../common/confirm-delete/confirm-delete.component';
import { EntityType } from 'app/shared/constants/entity-type';

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

    this.complexityLevelsService.getComplexityLevels().subscribe(
      (response: ComplexityLevel[]) => {
        this.complexityLevels = response.map(x => Object.assign(new ComplexityLevel(), x));
        this.loadingData = false;
      },
      (error) => {
        console.log(console.error());
      }
    );
  }

  confirmDelete(complexityLevelId: string): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = complexityLevelId;
    modalRef.componentInstance.entityType = EntityType.COMPLEXITY_LEVELS;
    modalRef.componentInstance.returnUrl = '/complexity-levels';

    modalRef.result.then((data) => {
      this.getComplexityLevels();
    }, (reason) => {
      console.log('Not good!');
    });
  }

  goToInfoPage(id: string): void {
    this.router.navigateByUrl('/complexity-levels/info/' + id);
  }

  goToEditPage(id: string): void {
    this.router.navigateByUrl('/complexity-levels/edit/' + id);
  }

  goToConfirmDeletePage(id: string): void {
    this.router.navigateByUrl('/complexity-levels/delete/' + id);
  }
}
