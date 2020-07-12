import { Injectable } from '@angular/core';
import { DataStorageService } from '@services/data.storage.service';
import { StoreHandler } from '@/app/core/classes/store.action';
import { Subject, ReplaySubject, Subscription } from 'rxjs';
import { section } from '@type/menu.el';
import { menuItem } from '@type/item';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddService extends StoreHandler {

  currentState$ = new ReplaySubject<any | menuItem>();
  currentStateChanges: Subscription;

  constructor(store: DataStorageService) {
    super(store);
    this.currentStateChanges = this.currentState$.subscribe(state => {
      if (state.sale) {
        return;
      }
      this.currentLevel = state.folder || this.menu;
    });
  }

  addItem(item: menuItem) {
    this.menu[0].items.push(item);
  }

  addSection(sec: any) {
    console.log(this.currentLevel);
    if (Array.isArray(this.currentLevel)) {
      this.menu.push(sec);
    } else {
      this.currentLevel.sections.push({
        name: sec.name,
        items: [],
        sections: [],
        color: sec?.color
      } as section);
    }
  }
}
