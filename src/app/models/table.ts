export class Table {
  
  private hour645: {id: number, hour: string ,array: any[]};
  private hour815: {id: number, hour: string ,array: any[]};
  private hour945: {id: number,hour: string ,array: any[]};
  private hour1115: {id: number,hour: string ,array: any[]};
  private hour1245: {id: number,hour: string ,array: any[]};
  private hour1415: {id: number,hour: string ,array: any[]};
  private hour1545: {id: number,hour: string ,array: any[]};
  private hour1715: {id: number,hour: string ,array: any[]};
  private hour1845: {id: number,hour: string ,array: any[]};
  private hour2015: {id: number,hour: string ,array: any[]};
  private hour2145: {id: number,hour: string ,array: any[]};

  schedule: Array<any>;
  
  constructor(){
    this.hour645 = {id:1, hour:"6:45 - 8:15",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour815= {id:2, hour:"8:15 - 9:45",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour945= {id:3,hour:"9:45 - 11:15",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour1115 = {id:4,hour:"11:15 - 12:45",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour1245 = {id:5,hour:"12:45 - 14:45",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour1415 = {id:6,hour:"14:15 - 15:45",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour1545 = {id:7,hour:"15:45 - 17:15",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour1715 = {id:8,hour:"17:15 - 18:45",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour1845 = {id:9,hour:"18:45 - 20:45",array: [{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    this.hour2015 = {id:10,hour:"20:45 - 21:45",array:[{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""},{materia:"", color:""}]};
    
    this.schedule = [this.hour645,this.hour815,this.hour945,this.hour1115,
    this.hour1245, this.hour1415, this.hour1545, this.hour1715, this.hour1845,
    this.hour2015]
  }

  deleteSchedule(day: number, hour: number,materia: string):void{
    let el: string = this.schedule[hour].array[day].materia; 
    this.schedule[hour].array[day].materia = "";
    this.schedule[hour].array[day].color = "";
  }

  setSchedule(day: number, hour: number,materia: string, color:string):void{
    let el: string = this.schedule[hour].array[day].materia; 
    if(el == undefined || el == "")  {
        this.schedule[hour].array[day].materia = materia;
        this.schedule[hour].array[day].color = color;
    }
    else{
        console.log('choque de materia');
        this.schedule[hour].array[day].materia +="-"+ materia;
        this.schedule[hour].array[day].color = "red";
    }
  }
}
