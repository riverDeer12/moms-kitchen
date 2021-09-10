import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  id: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getCategoryId();
  }

  getCategoryId() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
