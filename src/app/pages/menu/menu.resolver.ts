import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataStorageService } from '@services/data.storage.service';

@Injectable({ providedIn: 'root' })
export class MenuResolver implements Resolve<any> {
  constructor(private data: DataStorageService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.data.menu$.pipe(switchMap(() => of(true)));
  }
}
