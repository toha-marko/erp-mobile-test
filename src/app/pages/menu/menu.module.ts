import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuElementComponent } from './menu-element/menu.element.component';
import { MoreComponent } from './more/more.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuElementComponent,
    MoreComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
