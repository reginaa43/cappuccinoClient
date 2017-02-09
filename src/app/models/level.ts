import {Matter} from './matter'
export class Level{
    level: string;
    subjects: Matter[];
    constructor(){
        this.level = "-";
        this.subjects = [];
    }
}