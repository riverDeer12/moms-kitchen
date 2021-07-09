import { Router } from '@angular/router';
import { CommonService } from './../../../shared/services/common/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-complexity-level',
  templateUrl: './create-complexity-level.component.html',
  styleUrls: ['./create-complexity-level.component.css'],
})
export class CreateComplexityLevelComponent implements OnInit {
  returnUrl = '/complexity-levels';

  constructor(private commonService: CommonService, private router: Router) {
    this.setPageSettings();
  }

  ngOnInit(): void {}

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'New Complexity Level',
      'Please provide data for new complexity level'
    );
  }

  goBackToList(): void {
    this.router.navigateByUrl(this.returnUrl);
  }
}
