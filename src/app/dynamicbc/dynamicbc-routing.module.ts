import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DynamicbcComponent } from "./dynamicbc.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildOneComponent } from "./child-one/child-one.component";
import { ChildTwoComponent } from "./child-two/child-two.component";
import { ChildThreeComponent } from "./child-three/child-three.component";

const dynamicbcRoutes: Routes = [ 
  /*{
    path: "",
    component: DynamicbcComponent,
    children: [
      { path: "", redirectTo: "parent", pathMatch: "full" },
      {
        path: "parent",
        component: ParentComponent,
        data: { breadcrumb: { alias: 'Parent' } },
        children: [
          {
            path: "child-one",
            component: ChildOneComponent,
            data: { breadcrumb: { alias: 'ChildOne' } },
            children: [
              {
                path: "child-two",
                component: ChildTwoComponent,
                data: { breadcrumb: { alias: 'ChildTwo' } },
              },
              {
                path: "child-three",
                component: ChildThreeComponent,
                data: { breadcrumb: { alias: 'ChildThree' } },
              },
            ],
          },
        ],
      },
    ],
  },*/
];
@NgModule({
  imports: [RouterModule.forChild(dynamicbcRoutes)],
  exports: [RouterModule],
})
export class DynamicbcRoutingModule { }
