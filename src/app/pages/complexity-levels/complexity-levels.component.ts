import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common/common.service';

@Component({
  selector: 'app-complexity-levels',
  templateUrl: './complexity-levels.component.html',
  styleUrls: ['./complexity-levels.component.scss']
})
export class ComplexityLevelsComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor(private commonService: CommonService) {
    this.getPageSettings();
  }

  ngOnInit(): void {}

  getPageSettings(): void {
    this.commonService.getPageSettings().subscribe(data => {
      this.title = data.title;
      this.subtitle = data.subtitle;
    });
  }

}
