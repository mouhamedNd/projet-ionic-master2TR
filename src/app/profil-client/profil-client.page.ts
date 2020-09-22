import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {FormGroup,FormBuilder,Validators, NgForm} from '@angular/forms';
import { Plugins, CameraResultType, CameraSource,CameraPhoto } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import { writeFile } from 'fs';
//import { writeFileSync, readFileSync } from 'fs';
//import { timer } from 'rxjs';
const { Camera, Filesystem,FilesystemDirectory } = Plugins;


@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.page.html',
  styleUrls: ['./profil-client.page.scss'],
})
export class ProfilClientPage implements OnInit {


  changePwdForm:FormGroup;
  user:any;
  url;
  photo: SafeResourceUrl;
 // photo2:string;

  constructor(private session:SessionService,private formBuilder:FormBuilder,private sanitizer: DomSanitizer) { }

  initForm(){
    this.changePwdForm=this.formBuilder.group({
      ancienPwd:['',Validators.required],
      nouveauPwd:['',Validators.required]
    });  
  
    
  }
  
   
  async takePicture(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
    const blob = await fetch(image.webPath).then(r => r.blob());
    console.log(blob);
    this.uploadPicture(blob);


   
  }
  
submitPwdForm(){
  
}

  

  

    
      

    


 uploadPicture(file){
    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        let iduser = this.user.id;
        let idphoto = JSON.parse(xhr.responseText)[0].id;
        console.log(idphoto);
       this.setUserAvatar(iduser,idphoto);

      }
      else {
        console.log(xhr.responseText);    

      }
    }
    xhr.open("POST","http://localhost:1337/upload");
    let formData = new FormData();
    formData.append("files",file);
    xhr.send(formData);
  } 
setUserAvatar(idUser:number,idphoto:number){
  let xhr = new XMLHttpRequest();
  let url = "http://localhost:1337/users/"+idUser;
  let avatar= JSON.stringify({
    avatar:idphoto,
  });

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState==4&&xhr.status==200){
      console.log("mise à jour du profil réussie");
      console.log(xhr.responseText);

    }
    else{
      console.log(xhr.status);
    }

  }
  xhr.open("PUT",url);
  xhr.setRequestHeader("content-Type","application/json");
  xhr.send(avatar);


}



  ngOnInit() {
    this.initForm();
    this.user = this.session.userObj.user;
    this.url= "http://localhost:1337" +this.user.avatar.url;
    console.log(this.user);
  }

}
//http://localhost:1337/uploads/0e1032cf721d49a4bb3a30b64c8a761f.svg