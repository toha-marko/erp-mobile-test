import { DataStorageService } from '@services/data.storage.service';
import { section } from '@type/menu.el';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {

  menu: Array<section>;
  save$: Subject<any>;

  constructor(private store: DataStorageService) {
    this.menu = this.store.getMenu();
    this.save$ = this.store.save$;
  }
}
