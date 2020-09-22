import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-accueil-client',
  templateUrl: './accueil-client.page.html',
  styleUrls: ['./accueil-client.page.scss'],
})
export class AccueilClientPage implements OnInit {
  menu:any;
  user:any;
subscriptionMenu:Subscription;
  constructor(private session:SessionService) { 
    this.user=this.session.userObj;
    
  }

  ngOnInit() {
    this.subscriptionMenu =this.session.menuSubject.subscribe((menu:any)=>{
      this.menu=menu;
    });
    this.session.emitMenuSubject();
    console.log(this.menu);
  }
commander(i:number){
  let menuNom=this.menu[i].plat;
  let clientNom=this.user.user.NOM;
  let clientTel=this.user.user.Telephone;
  let xhr= new XMLHttpRequest();
  xhr.onreadystatechange=()=>{
    if(xhr.readyState===4&&xhr.status==200){
      console.log(xhr.responseText);
    
    }
    else{
      console.log(xhr.status);
    } }
    xhr.open("POST","http://localhost:1337/commandes");
    xhr.setRequestHeader("content-Type","application/json");
    xhr.send(JSON.stringify({

      Nomplat:menuNom,
      Nomclient:clientNom,
      Telclient:clientTel
    }));
  }
  //console.log(this.user.user.NOM +" vous avez commandé le plat"+ plat.plat + plat.description);
}

