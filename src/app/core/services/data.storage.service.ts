import { Injectable, OnDestroy } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { catchError, map, shareReplay, take } from 'rxjs/operators';
import { of, Subject, Subscription } from 'rxjs';
import { section } from '@type/menu.el';

const storeName = 'erpMenu';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService implements OnDestroy {
  #menu: Array<section>;
  #saveSubscription: Subscription;

  menu$ = ajax('./assets/data/menu.json')
    .pipe(
      catchError(() => of(JSON.parse(localStorage.getItem(storeName)))),
      map(data => data?.response || []),
      shareReplay(1)
    );
  save$ = new Subject<any>();

  constructor() {
    this.menu$.pipe(take(1)).subscribe(sections => this.#menu = sections);
    this.#saveSubscription = this.save$.subscribe(() => this.saveChanges());
  }

  private saveChanges() {
    localStorage.setItem(storeName, JSON.stringify({ response: this.#menu }));
    console.log(this.#menu);
  }

  getMenu(): Array<section> {
    return this.#menu;
  }

  ngOnDestroy() {
    if (this.#saveSubscription) {
      this.#saveSubscription.unsubscribe();
    }
  }
}
