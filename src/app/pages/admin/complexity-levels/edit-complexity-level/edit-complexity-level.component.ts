import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-edit-complexity-level',
  templateUrl: './edit-complexity-level.component.html',
  styleUrls: ['./edit-complexity-level.component.scss'],
})
export class EditComplexityLevelComponent implements OnInit {
  id: string;
  returnUrl = '/admin/complexity-levels';
  loadingData: boolean;

  constructor(
    private commonService: CommonService,
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
}
