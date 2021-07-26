import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './../../../shared/services/common/common.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmDeleteComponent } from 'app/shared/components/common/confirm-delete/confirm-delete.component';
import { EntityType } from 'app/shared/constants/entity-type';

@Component({
  selector: 'app-complexity-level-info',
  templateUrl: './complexity-level-info.component.html',
  styleUrls: ['./complexity-level-info.component.scss'],
})
export class ComplexityLevelInfoComponent implements OnInit {
  id: string;
  returnUrl = '/complexity-levels';
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.loadingData = true;
    this.setPageSettings();
  }

  ngOnInit() {
    this.getComplexityLevelId();
  }

  getComplexityLevelId(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadingData = false;
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Complexity level details',
      'Here you can read data about complexity level'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }

  goToEditPage(): void {
    this.router.navigateByUrl('/admin/complexity-levels/edit/' + this.id);
  }

  confirmDelete(): void {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.entityId = this.id;
    modalRef.componentInstance.entityType = EntityType.COMPLEXITY_LEVELS;
    modalRef.componentInstance.returnUrl = '/admin/complexity-levels';

    modalRef.result.then((data) => {
      this.router.navigateByUrl('/admin/complexity-levels');
    }, (reason) => {
      console.log('Not good!');
    });
  }
}
