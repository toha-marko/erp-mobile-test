import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddService } from '../add.service';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, skipWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnDestroy {

  formChanges: Subscription;

  form = this.fb.group({
    name: [null, Validators.required],
    sale: [null, Validators.required]
  });
  constructor(private addService: AddService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formChanges = this.form.valueChanges.pipe(
      skipWhile(() => this.form.invalid),
      debounceTime(200),
      distinctUntilChanged(),
      tap(console.log)
    ).subscribe(value => this.addService.currentState.next(value));
  }

  ngOnDestroy() {
    if (this.formChanges) {
      this.formChanges.unsubscribe();
    }
  }

}
