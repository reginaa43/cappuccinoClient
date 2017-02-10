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
  selectCarrier: boolean = false;
  myMatters: Array<Matter> = new Array<Matter>();

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
    // console.log(code);
    this.selectCarrier = false;
  }

  showGroups(matter: Matter){
    this.selectedMatter = matter;
    this.showgroups = true;
    this.groups = matter.groups;
  }

  addSchedule(group: Schedule[], matter:Matter){
    if(this.existMatter(matter)){
      console.log("ya existe la materia en nuestra lista");
      this.removeFromTable(group);
      this.myMatters = this.myMatters.filter((item)=>{return item.id!=matter.id});
    }
    else{
      matter.nameMatter = this.selectedMatter.name;
      this.myMatters.push(matter);
      this.addToTable(group);
    }
      console.log(this.myMatters);
  }

  existMatter(matter: Matter): boolean{
    let el:Matter = this.myMatters.find((item: Matter)=>{
      return matter.id == item.id;
    });
    return el != undefined;
  }

  addToTable(group: Schedule[]){
    let schedule: Schedule = new Schedule();
    for(let item of group){
      let start = schedule.getSart(item.start);
      let day = schedule.getDay(item.day);
      this.tabla.setSchedule(day,start,this.selectedMatter.name+"-"+item.room);  
    }
  }

  removeFromTable(group: Schedule[]){
    let schedule: Schedule = new Schedule();
    for(let item of group){
      let start = schedule.getSart(item.start);
      let day = schedule.getDay(item.day);
      this.tabla.deleteSchedule(day,start,this.selectedMatter.name+"-"+item.room);  
    }
  }
}
