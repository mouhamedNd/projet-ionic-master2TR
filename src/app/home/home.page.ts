import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SessionService} from '../session.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  messageErreur:string="";
authForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private session:SessionService,private router:Router
    ) {}
  initForm(){
    this.authForm= this.formBuilder.group({
      login:['',Validators.required],
      pwd:['',Validators.required]

    });
  }
  onSubmit(){
    let login:string=this.authForm.get('login').value;
    let pwd:string=this.authForm.get('pwd').value;
    if (login==="admin"&&pwd==="admin"){
      console.log("bonjour admin");
      this.router.navigate(['/accueil-admin']);

    }
    else{

    let user_json = JSON.stringify({
      identifier:login,
      password:pwd,

    });
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        
        this.messageErreur="";
        this.session.userObj=JSON.parse(xhr.responseText);
        //this.session.usersessionSubject.next(JSON.parse(xhr.responseText));
        this.router.navigate(['/accueil-client']);
      }
      else {
        this.messageErreur="!Attention Login ou mot de passe érroné.Veuillez réessayer";        
      }
      
    };

    xhr.open("POST","http://localhost:1337/auth/local");
    xhr.setRequestHeader("content-Type","application/json");
    xhr.send(user_json);

    

  }}

ngOnInit(){
this.initForm();
console.log("bonjour");
  }
  
}
