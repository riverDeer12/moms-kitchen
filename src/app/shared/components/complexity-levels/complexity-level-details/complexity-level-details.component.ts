import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplexityLevel } from 'app/shared/dtos/complexity-levels/complexity-level';
import { ComplexityLevelsService } from 'app/shared/services/complexity-levels/complexity-levels.service';

@Component({
  selector: 'app-complexity-level-details',
  templateUrl: './complexity-level-details.component.html',
  styleUrls: ['./complexity-level-details.component.scss'],
})
export class ComplexityLevelDetailsComponent implements OnInit {
  @Input() id: string;

  complexityLevel: ComplexityLevel;
  loadingData: boolean;

  constructor(
    private service: ComplexityLevelsService
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getComplexityLevel();
  }

  getComplexityLevel() {
    this.service
      .getComplexityLevel(this.id)
      .subscribe((response: ComplexityLevel) => {
        this.complexityLevel = response as ComplexityLevel;
        this.loadingData = false;
      });
  }
}
