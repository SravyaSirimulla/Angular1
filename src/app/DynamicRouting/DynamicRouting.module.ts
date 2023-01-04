import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRoutingRouteModule } from './DynamicRouting-routing.module';
import { ParentComponent } from "./parent/parent.component";
import { ChildOneComponent } from "./ChildOne/childone.component";
import { ChildTwoComponent } from "./ChildTwo/childtwo.component";
import { ChildThreeComponent } from "./ChildThree/childthree.component";
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingRouteModule,
    RouterModule,
    BreadcrumbModule
  ]
})
export class DynamicRoutingModule {
}
