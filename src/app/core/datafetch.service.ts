import { Injectable } from '@angular/core';
import { DataObject, CoursesObject } from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  private url: string;

  constructor( private http: HttpClient) {
    this.url = "../../assets/data/data.json";
  }

  getData() : Observable<DataObject[]> {
    return this.http.get<DataObject[]>(this.url);
  }

}
