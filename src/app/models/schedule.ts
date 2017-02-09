export class Schedule {
    day: string;
    start: string;
    end: string;
    teacher: string;
    room: string;
    constructor(){

    }

    getDay(day: string): number{
        let resp: number = -1;
        switch (day) {
            case "LU":
                resp = 0;
                break;
            case "MA":
                resp = 1;
                break;
            case "MI":
                resp = 2;
                break;
            case "JU":
                resp = 3;
                break;
            case "VI":
                resp = 4;
                break;
            case "SA":
                resp = 5;
                break;
            default:
            resp = -1;
                break;
        }
        return resp;
    }

    getSart(start: string): number{
        let resp: number = 0;
        switch (start) {
            case "645":
                resp = 0;    
            break;
            case "815":
                resp = 1;    
            break;
            case "945":
                resp = 2;    
            break;
            case "1115":
                resp = 3;    
            break;
            case "1245":
                resp = 4;    
            break;
            case "1415":
                resp = 5;    
            break;
            case "1545":
                resp = 6;    
            break;
            case "1715":
                resp = 7;    
            break;
            case "1845":
                resp = 8;    
            break;
            case "2015":
                resp = 9;    
            break;
            default:
            resp = -1;
                break;
        }
        return resp;
    }
}
