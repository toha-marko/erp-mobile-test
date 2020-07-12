import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddService } from './add.service';
import { take } from 'rxjs/operators';
import { menuItem } from '@type/item';
import { section } from '@type/menu.el';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;
  title = '';

  constructor(private addService: AddService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = this.route.url.subscribe(() => {
      this.title = this.route.snapshot.firstChild.data.title;
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    this.addService.currentState.pipe(take(1)).subscribe(value => {
      if (value) {
        if ('sale' in value) {
          this.addService.addItem(value as menuItem);
        } else {
          this.addService.addSection(value as section);
        }
      }
      this.addService.onSave();
      this.router.navigate(['/menu']);
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
