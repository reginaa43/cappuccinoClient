import {Schedule} from './schedule'
export class Matter {
    id: number;
    code: string;
    name: string;
    groups: Schedule[];
    color:string;
    showShedule: boolean = false;
    nameMatter: string;
    constructor(){
        this.color = "red";
    }
}
