
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {HttpClient} from '@angular/common/http';
import  {map} from 'rxjs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  title = 'forms2';
  ractiveform:FormGroup
  text:string
  users=[];
  ngOnInit(): void{
  this.ractiveform=new FormGroup({
   name:new FormControl(null),
   surname:new FormControl(null),
   email: new FormControl(null),
   password: new FormControl(null),
    img:new FormControl(null),
   gender:new FormControl('none')
  })

  }
  constructor(private http:HttpClient ,private router: Router ){
   
  }
  submit(){
    console.log(this.ractiveform.value)
  
    this.http.post('https://finalls-a1c25-default-rtdb.europe-west1.firebasedatabase.app/info.json', this.ractiveform.value).subscribe(
      (response) => {
        console.log(response);
      }
    );  
    this.ractiveform.reset()
    }

chack(){
  this.text=null;
  this.http.get('https://finalls-a1c25-default-rtdb.europe-west1.firebasedatabase.app/info.json')
  .pipe(map((res) => {
    const products=[]
      for (const key in res) {
        let product={    
          email:res[key].email,
          password:res[key].password,
          name:res[key].name,
          surname:res[key].surname,
          link:res[key].img,
          id:key
        }
        products.push(product)
      }
        
   
     return products;
  })).subscribe((response) => {
 
     this.users = response;
     for( let user of this.users){
      if(this.ractiveform.value.email==user.email ){
        this.text='this email is already used by another user '
     
      break
      }else if( this.ractiveform.value.password==user.password){
        this.text='this password is already used by another user '
    
        break
      }
     }
     if(this.text==null){ 

   
       this.submit()
       this.router.navigate(['../log-in'])
  }
  })
}

}

