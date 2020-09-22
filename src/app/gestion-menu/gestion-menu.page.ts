import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.page.html',
  styleUrls: ['./gestion-menu.page.scss'],
})
export class GestionMenuPage implements OnInit {
  private plats:any;
  private addMenuForm:FormGroup;




  constructor(private sessionService:SessionService,private formBuilder:FormBuilder) { }
  initAddMenuForm(){
    this.addMenuForm = this.formBuilder.group({
      nomPlat:['',Validators.required],
      descriptionPlat:['']
    });
  }
  onSubmit(){
   let  nom = this.addMenuForm.get('nomPlat').value;
   let  description  = this.addMenuForm.get('descriptionPlat').value;
  let menu= JSON.stringify({
     plat:nom,
     description:description
   });
   this.sendMenuToServer(menu);


  }

  sendMenuToServer(objet){
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        console.log(xhr.responseText);
        this.sessionService.loadMenu();
        this.sessionService.emitMenuSubject();
      }
      else {
        console.log("erreur")
      }
    }

   
    xhr.open("POST","http://localhost:1337/menus");
    xhr.setRequestHeader("content-Type","application/json");
    xhr.send(objet);

  }
  deletePlat(i){
    let id = this.plats[i].id;
    let xhr= new XMLHttpRequest();
    let url = "http://localhost:1337/menus/"+id;
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        console.log("suppression réussie");
       // this.plats.remove(i);
        this.sessionService.loadMenu();
        this.sessionService.emitMenuSubject();


      }
    }
    xhr.open("DELETE",url,false);
    xhr.send(null);
      
  }

  ngOnInit() {
    this.initAddMenuForm();
    this.sessionService.menuSubject.subscribe(
      (plats)=>{
        this.plats=plats;

      }
    );
    this.sessionService.emitMenuSubject();
  }



}
