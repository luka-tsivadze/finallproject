import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
user:any
email='johndoe@gmail.com'
constructor(){
  this.getuserinfo()
}


  getuserinfo(){
if(this.user=JSON.parse(localStorage.getItem('userinfo'))){
    this.user=JSON.parse(localStorage.getItem('userinfo'))
    this.email=this.user.email
    
    }

  }
}
