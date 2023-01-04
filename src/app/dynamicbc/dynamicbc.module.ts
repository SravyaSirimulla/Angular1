import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicbcRoutingModule } from './dynamicbc-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule, BreadcrumbService } from "xng-breadcrumb";

@NgModule({
  declarations: [
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent
  ],
  imports: [
    CommonModule,
    DynamicbcRoutingModule,
    RouterModule,
    MatIconModule,
    BreadcrumbModule
  ]
})
export class DynamicbcModule {
}
