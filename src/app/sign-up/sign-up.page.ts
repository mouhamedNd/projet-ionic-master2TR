import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
signUpForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router) { }
  initForm(){
    this.signUpForm=this.formBuilder.group({
      login:['',Validators.required],
      email:['',Validators.required],
      pwd:['',Validators.required],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      Tel:['',Validators.required],

    });
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit(){
    let username= this.signUpForm.get('login').value;
    let email= this.signUpForm.get('email').value;
    let pwd= this.signUpForm.get('pwd').value;
    let prenom=this.signUpForm.get('prenom').value;
    let nom=this.signUpForm.get('nom').value;
    let tel =this.signUpForm.get('Tel').value;

    

    let user_json = JSON.stringify({
      username:username,
      email:email,
      password:pwd,
      NOM:prenom + " "+ nom,
      Telephone:tel
  

    });
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        console.log(xhr.responseText);
        //this.session.usersessionSubject.next(JSON.parse(xhr.responseText));
        this.router.navigate(['/home']);
        
      }
      else if (xhr.readyState==4&&xhr.status==400){
        console.log(xhr.status);        
      }
      else{
        console.log(xhr.status);
      }
  }
 xhr.open("POST","http://localhost:1337/auth/local/register");
  xhr.setRequestHeader("content-Type","application/json");
  xhr.send(user_json);
  }
}
