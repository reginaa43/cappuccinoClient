import {Schedule} from './schedule'
export class Matter {
    id: number;
    code: string;
    name: string;
    groups: Schedule[];
    showShedule: boolean = false;
    nameMatter: string;
    constructor(){

    }
}
