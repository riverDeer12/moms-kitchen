import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../shared/services/common/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-complexity-level',
  templateUrl: './edit-complexity-level.component.html',
  styleUrls: ['./edit-complexity-level.component.scss'],
})
export class EditComplexityLevelComponent implements OnInit {
  id: string;
  returnUrl = '/complexity-levels';
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      'Edit complexity level',
      'Here you can edit complexity level data'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }
}
