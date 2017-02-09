import { Component, OnInit } from '@angular/core';
import {Table} from '../models/table'
import {Level} from '../models/level'
import {Matter} from '../models/matter'
import {Schedule} from '../models/schedule'
import {ScheduleService } from '../services/schedule.services'
import {Menu} from '../models/menu';
import {MenuService} from '../services/menu.services';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers:[ScheduleService, MenuService]
})

export class TablaComponent implements OnInit {
  tabla: Table;
  level: Level;
  selectedMatter: Matter;
  groups: Schedule[];
  showMatter: boolean = false;
  showgroups: boolean = false;
  carreras :Menu[];
  selectCarrier: boolean = true;

  constructor(private servicioMenu: MenuService, private service: ScheduleService) {
    this.level = new Level();
    this.servicioMenu.getMenu().subscribe(
      (resp: Menu[])=>{ this.carreras = resp; }
    );

    this.service.getSchedule("/").subscribe((data: any)=>{
      this.level = data;
    });
   }

  ngOnInit() {
    this.tabla = new Table();
  }

  selected(code: string): void{
    console.log(code);
    this.selectCarrier = false;
  }

  InsetTest(day:number, hour:number, element:string ):void{
     this.tabla.setSchedule(day,hour,"materia");
  }

  showGroups(matter: Matter){
    this.selectedMatter = matter;
    this.showgroups = true;
    this.groups = matter.groups;
  }

  addSchedule(group: Schedule[], name:any){
    console.log(name);
    let schedule: Schedule = new Schedule();
    for(let item of group){
      this.tabla.setSchedule(schedule.getDay(item.day),
      schedule.getSart(item.start),this.selectedMatter.name+"-"+item.room);
    }
  }
}
