import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ItemModule { }
