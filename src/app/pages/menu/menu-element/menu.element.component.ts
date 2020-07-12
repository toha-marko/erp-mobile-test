import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { menuItem } from '@type/item';
import { section } from '@type/menu.el';

@Component({
  selector: 'app-menu-element',
  templateUrl: './menu.element.component.html',
  styleUrls: ['./menu.element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuElementComponent implements OnInit {

  @Input() item: section | menuItem;
  groupsOpen: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  openClose() {
    this.groupsOpen = !this.groupsOpen;
  }
}
