import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, RadioControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { distinctUntilChanged, debounce, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { colors } from '@type/colors';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorsComponent),
      multi: true
    }
  ]
})
export class ColorsComponent implements OnInit, OnDestroy, ControlValueAccessor {

  colorNames: Array<string> = [];
  colors = this.fb.group({
    color: [null]
  });

  changesListener: Subscription;

  constructor(private fb: FormBuilder) { }

  onChange: (_: any) => void;
  onTouched: () => void;

  writeValue(obj: string): void {
    this.colors.setValue({
      color: obj
    });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.changesListener = this.colors.get('color').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(200)
    ).subscribe(value => {
      this.onChange(value);
    });
    for (const color in colors) {
      if (color) {
        this.colorNames.push(color);
      }
    }
  }

  track(index: any) {
    return index;
  }

  ngOnDestroy(): void {
    if (this.changesListener) {
      this.changesListener.unsubscribe();
    }
  }
}
