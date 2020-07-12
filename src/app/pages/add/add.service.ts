import { Injectable } from '@angular/core';
import { DataStorageService } from '@services/data.storage.service';
import { StoreHandler } from '@/app/core/classes/store.action';
import { Subject, ReplaySubject } from 'rxjs';
import { section } from '@type/menu.el';
import { menuItem } from '@type/item';

@Injectable({
  providedIn: 'root'
})
export class AddService extends StoreHandler {

  currentState = new ReplaySubject<section | menuItem>();

  constructor(store: DataStorageService) {
    super(store);
  }

  addItem(item: menuItem) {
    this.menu[0].items.push(item);
  }

  addSection(sec: section) {
    this.menu.push(sec);
  }
}
