import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent,
    children: [
      {
        path: '',
        redirectTo: 'item',
        pathMatch: 'full'
      },
      {
        path: 'section',
        loadChildren: () => import('./section/section.module').then(m => m.SectionModule),
        data: {
          title: 'секцию'
        }
      },
      {
        path: 'item',
        loadChildren: () => import('./item/item.module').then(m => m.ItemModule),
        data: {
          title: 'позицию'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
