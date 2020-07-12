import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled.input.component.html',
  styleUrls: ['./labeled.input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabeledInputComponent implements OnInit {

  @Input() label: string;
  @Input() noborder?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
