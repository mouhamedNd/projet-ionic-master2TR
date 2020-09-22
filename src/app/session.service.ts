import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public userObj:any;
  menu:any[];
  menuSubject= new Subject<any>();

  loadMenu(){
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange= ()=>{
      if(xhr.readyState===4&&xhr.status===200){
        this.menu= JSON.parse(xhr.responseText);
        //console.log(this.menu);
        //this.menuSubject.next(this.menu.slice());
      }
      else{
        console.log(xhr.status);
      }
    }
    xhr.open("GET","http://localhost:1337/menus",false);
    xhr.send(null);
  }
  emitMenuSubject(){
    this.menuSubject.next(this.menu.slice());
  }
  constructor() {
    this.loadMenu();
} }
