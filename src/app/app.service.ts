import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http:HttpClient
  ) { 

  }

  apiLevel1(){
    return this.http.get('http://127.0.0.1:8000/api/level1');
  }
}
