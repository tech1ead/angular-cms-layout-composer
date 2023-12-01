import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericComponent } from './shared/component/cms/page/generic/generic.component';

const routes: Routes = [
  { 
    path: '', 
    component: GenericComponent, 
    data: { isHomePage: true }
  },
  { 
    path: ':id', 
    component: GenericComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
