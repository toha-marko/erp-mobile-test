import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddService } from '../add.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { skipWhile, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {

  formChanges: Subscription;
  form = this.fb.group({
    name: [null, Validators.required],
    folder: [null],
    color: [null]
  });

  menu = this.addService.menu;

  constructor(private addService: AddService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formChanges = this.form.valueChanges.pipe(
      skipWhile(() => this.form.invalid),
      debounceTime(200),
      distinctUntilChanged(),
      tap(console.log),
    ).subscribe(value => this.addService.currentState$.next(value));
  }

  ngOnDestroy() {
    if (this.formChanges) {
      this.formChanges.unsubscribe();
    }
  }

}
