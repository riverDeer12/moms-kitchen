import { Router } from '@angular/router';
import { CommonService } from './../../../services/common/common.service';
import { ComplexityLevelsService } from './../../../services/complexity-levels/complexity-levels.service';
import { Component, OnInit } from '@angular/core';
import { ComplexityLevel } from 'app/shared/dtos/complexity-levels/complexity-level';

@Component({
  selector: 'app-complexity-levels-list',
  templateUrl: './complexity-levels-list.component.html',
  styleUrls: ['./complexity-levels-list.component.scss']
})
export class ComplexityLevelsListComponent implements OnInit {

  complexityLevels: ComplexityLevel[];
  loadingData: boolean;

  constructor(
    private complexityLevelsService: ComplexityLevelsService,
    private commonService: CommonService,
    private router: Router
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
    this.complexityLevelsService.getComplexityLevels().subscribe(
      (response: ComplexityLevel[]) => {
        this.complexityLevels = response as ComplexityLevel[];
        this.loadingData = false;
      },
      (error) => {
        console.log(console.error());
      }
    );
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
