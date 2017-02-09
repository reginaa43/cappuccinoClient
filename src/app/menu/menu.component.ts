import { Component, OnInit } from '@angular/core';
import {Menu} from '../models/menu';
import {MenuService} from '../services/menu.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  carreras :Menu[];
  selectCarrier: boolean = true;
  constructor(private servicioMenu: MenuService) { }

  ngOnInit() {
    this.servicioMenu.getMenu().subscribe(
      (resp: Menu[])=>{ this.carreras = resp; }
    );
  }

}
