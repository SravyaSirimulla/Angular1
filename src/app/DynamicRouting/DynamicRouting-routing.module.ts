import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ParentComponent } from "./parent/parent.component";
import { ChildOneComponent } from "./ChildOne/childone.component";
import { ChildTwoComponent } from "./ChildTwo/childtwo.component";
import { ChildThreeComponent } from "./ChildThree/childthree.component";
import { ChildFourComponent } from "./ChildFour/childfour.component";

const dynamicRoutes: Routes = [
  { path: '', component: ParentComponent, data: {breadcrumb:'Parent'} },
  { path: 'childone', component: ChildOneComponent, data: { breadcrumb: 'FirstChild' } },
  { path: 'childtwo', component: ChildTwoComponent, data: { breadcrumb: 'SecondChild' } },
  {
    path: 'childthree', component: ChildThreeComponent,
    data: { breadcrumb: 'ThirdChild' },
    children: [
      { path: 'childfour', component: ChildFourComponent, data: { breadcrumb: 'FourthChild' } },],
  }, 
];
@NgModule({
  imports: [RouterModule.forChild(dynamicRoutes)],
  exports: [RouterModule],
})
export class DynamicRoutingRouteModule { }
