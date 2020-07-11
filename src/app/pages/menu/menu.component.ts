import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { section } from '@type/menu.el';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Array<section>;

  constructor(private service: MenuService) {
    this.menu = service.menu;
  }

  ngOnInit(): void {
  }

}
