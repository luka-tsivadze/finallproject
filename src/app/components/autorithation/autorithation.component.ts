import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {HttpClient} from '@angular/common/http';
import  {map} from 'rxjs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-autorithation',
  templateUrl: './autorithation.component.html',
  styleUrls: ['./autorithation.component.scss']
})
export class AutorithationComponent  implements OnInit {
  title = 'forms2';
  ractiveform:FormGroup
  users=[];
  link:string
password=false;
email=false;
  restartWindow: any; 
   constructor(private http:HttpClient ,private router: Router ){
   
    }
  ngOnInit(): void{
  this.ractiveform=new FormGroup({
   email: new FormControl(null),
   password: new FormControl(null),
   gender:new FormControl('none')
  })
  if (localStorage.getItem('isregistred') === 'true') {
    this.router.navigate(['']); 
  }
  }

  submit(){

    
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
      if(this.ractiveform.value.email==user.email && this.ractiveform.value.password==user.password){
        this.email=false
        this.password=false
        console.log('logged')
        localStorage.setItem('userinfo',JSON.stringify(user))
        localStorage.setItem('isregistred', 'true')
            window.location.reload();
      }else if(this.ractiveform.value.email==user.email){
        this.email=false
        this.password=true
        console.log(this.password)
       break
      }else{
        this.password=false
        this.email=true
        console.log(this.email)
        break
      }

     } 
     
  })

  }
}
