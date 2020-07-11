import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuResolver } from './menu.resolver';

import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    resolve: {
      data: MenuResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
