import { QuoteComponent } from './quote/quote.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'parent' },
  {
    path: 'parent', loadChildren: () =>
      import('./DynamicRouting/DynamicRouting.module').then(m => m.DynamicRoutingModule),
    data: { breadcrumb: { skip: true } }
  }
  
  /*{
    path: '',
    component: QuoteComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
