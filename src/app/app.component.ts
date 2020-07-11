import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedData$ = this.loadingService.isLoading$.pipe(map(loading => !loading));
  constructor(private loadingService: LoadingService)
  { }
}
