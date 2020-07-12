import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuElementComponent } from './menu-element/menu.element.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuElementComponent

  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
