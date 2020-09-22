import { Component, OnInit } from '@angular/core';
import {Subscription,Subject} from 'rxjs';

@Component({
  selector: 'app-liste-des-commandes',
  templateUrl: './liste-des-commandes.page.html',
  styleUrls: ['./liste-des-commandes.page.scss'],
})
export class ListeDesCommandesPage implements OnInit {
  subject = new Subject<any>();
  sub:Subscription;
  commandes:any[];
  listesCommandes:any;
  loadCommande(){
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
      if (xhr.readyState==4&&xhr.status==200){
        this.commandes = JSON.parse(xhr.responseText);
        console.log(this.commandes);
      }

    }
    xhr.open("GET","http://localhost:1337/commandes",false);
    xhr.send(null);
  }
emitSubject(){
  this.subject.next(this.commandes.slice());
}
  constructor() { 
    this.loadCommande();
  }

  ngOnInit() {
    console.log(this.commandes);
    this.sub = this.subject.subscribe((commandes)=>{
      this.listesCommandes=commandes;
    });
    this.emitSubject();
  }

}
