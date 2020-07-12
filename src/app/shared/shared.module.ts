import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabeledInputComponent } from './labeled.input/labeled.input.component';
import { CurrencyDirective } from '../core/directives/currency';

const components = [
  LabeledInputComponent,
  CurrencyDirective
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class SharedModule { }
