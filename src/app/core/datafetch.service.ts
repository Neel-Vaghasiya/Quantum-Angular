import { Injectable } from '@angular/core';
import { DataObject, CoursesObject, AlertObject, AnnouncementObject } from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  private url: string;
  private alertUrl: string;
  private announcementUrl: string;

  constructor( private http: HttpClient) {
    this.url = "/assets/data/data.json";
    this.alertUrl = "/assets/data/alert.json";
    this.announcementUrl = "/assets/data/announcement.json"
  }
  getData() : Observable<DataObject> {
    return this.http.get<DataObject>(this.url);
  }

  getAlerts(): Observable<AlertObject> {
    return this.http.get<AlertObject>(this.alertUrl)
  }

  getAnnouncements(): Observable<AnnouncementObject> {
    return this.http.get<AnnouncementObject>(this.announcementUrl)
  }



}
