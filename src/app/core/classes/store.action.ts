import { Subject } from 'rxjs';
import { DataStorageService } from '@services/data.storage.service';
import { section } from '@type/menu.el';

export abstract class StoreHandler {
  save$: Subject<any>;
  menu: Array<section>;
  currentLevel: section | Array<section>;

  constructor(store: DataStorageService) {
    this.save$ = store.save$;
    this.menu = store.getMenu();
  }

  onSave() {
    this.save$.next(true);
  }
}
