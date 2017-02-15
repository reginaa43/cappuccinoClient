import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Level} from '../models/level';
// import { BLOGERS } from '../model/mock-menu';

@Injectable()
export class ScheduleService{
	url = 'http://localhost:3000';
	constructor(private http: Http){}

	getSchedule(grado: string): Observable<any>{
		return this.http.get(`${this.url}/${grado}`)
		.map((response: Response) => response.json()); 
		// return Promise.reject('Promise Fail');
		//json-server --watch db.json to serve a service json
	}

	getLevels(): Observable<any[]>{
		return this.http.get(`${this.url}/niveles`)
		.map((response: Response) => response.json()); 
	}	
}