import { Injectable } from '@angular/core';
import { DataStorageService } from '@services/data.storage.service';
import { section } from '@type/menu.el';
import { StoreHandler } from '@/app/core/classes/store.action';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends StoreHandler {

  constructor(store: DataStorageService) {
    super(store);
  }
}
