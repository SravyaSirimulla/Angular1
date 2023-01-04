import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Breadcrumb } from 'xng-breadcrumb/lib/types/breadcrumb';

@Component({
  selector: 'dynamic-routing',
  templateUrl: './DynamicRouting.component.html'
})
export class DynamicRoutingComponent implements OnInit {
  breadcrumbs$: Observable<Breadcrumb[]> | undefined; 
  constructor(private readonly breadcrumbService: BreadcrumbService)
  {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
}
  ngOnInit(): void {}
}
