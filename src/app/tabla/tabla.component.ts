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
/* remember in the filtering are use a code for id to do this selection */
export class TablaComponent implements OnInit {
  levels: any[];
  tabla: Table;
  level: Level;
  selectedMatter: Matter = null;
  groups: Schedule[];
  showMatter: boolean = false;
  showgroups: boolean = false;
  carreras :Menu[];
  selectCarrier: boolean = false;
  myMatters: Array<Matter> = new Array<Matter>();
  colors :string[] = ['pink','purple','indigo','blue','amber','lime','teal',
  'cyan','geen','brown','grey'];

  constructor(private servicioMenu: MenuService, private service: ScheduleService) {
    this.level = new Level();
    this.servicioMenu.getMenu().subscribe(
      (resp: Menu[])=>{ this.carreras = resp; }
    );

    this.service.getLevels().subscribe((data: any)=>{
      this.levels = data;
    });
   }

  ngOnInit() {
    this.tabla = new Table();
  }

  selected(code: string): void{
    this.selectCarrier = false;
  }

  showGroups(matter: Matter){
    if(this.selectedMatter != null){
      this.selectedMatter.showShedule = false;
    }
    this.selectedMatter = matter;
    this.showgroups = true;
    this.groups = matter.groups;
    this.selectedMatter.showShedule = true; 
  }

  addSchedule(group: Schedule[], matter:Matter){
    if(this.existMatter(matter)){
      console.log("ya existe la materia en nuestra lista");
      this.removeFromTable(group);
      this.myMatters = this.myMatters.filter((item)=>{return item.code!=matter.code});
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
      return matter.code == item.code;
    });
    return el != undefined;
  }

  addToTable(group: Schedule[]){
    let schedule: Schedule = new Schedule();
    let colorRandom: string = this.colors[~~(Math.random()*this.colors.length-1)];
    console.log(colorRandom);
    console.log(Math.random()*this.colors.length);
    for(let item of group){
      let start = schedule.getSart(item.start);
      let day = schedule.getDay(item.day);
      this.tabla.setSchedule(day,start,this.selectedMatter.name+"-"+item.room,colorRandom);  
    }
  }

  selectedLevel(level :string){
    this.showMatter = true;
    this.service.getSchedule(level).subscribe((data: any)=>{
      this.level = data;
    });
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
