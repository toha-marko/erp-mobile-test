import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { SharedModule } from '@shared/shared.module';
import { ColorsComponent } from './colors/colors.component';


@NgModule({
  declarations: [SectionComponent, ColorsComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SectionModule { }
