import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from './../../../shared/services/common/common.service';
import { Component, OnInit } from '@angular/core';

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
    private router: Router
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
    this.router.navigateByUrl('/complexity-levels/edit/' + this.id);
  }

  goToConfirmDeletePage(): void {
    this.router.navigateByUrl('/complexity-levels/delete/' + this.id);
  }
}
