import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Menu} from '../models/menu';
// import { BLOGERS } from '../model/mock-menu';

@Injectable()
export class MenuService{
	url = 'http://localhost:3000/menu';
	constructor(private http: Http){}

	getMenu(): Observable<Menu[]>{
		return this.http.get(this.url)
		.map((response: Response) => response.json()); 
		// return Promise.reject('Promise Fail');
		//json-server --watch db.json to serve a service json
	}	
}