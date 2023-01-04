import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-dynamicbc',
  templateUrl: './dynamicbc.component.html',
  styleUrls: ['./dynamicbc.component.scss']
})
export class DynamicbcComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService,
  ) { }
    ngOnInit(): void {this.breadcrumbService.set('@ChildOne', 'Child One');
  }
}
