import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
user:any
email='johndoe@gmail.com'
i=JSON.parse(localStorage.getItem('i'))
constructor(){

}
ngOnInit(): void {
  
console.log('page')
     
  this.getuserinfo()
}


  getuserinfo(){
if(this.user=JSON.parse(localStorage.getItem('userinfo'))){
    this.user=JSON.parse(localStorage.getItem('userinfo'))
    this.email=this.user.email
 
    }
    if(this.user=JSON.parse(localStorage.getItem('userinfo'))&& this.i==0){
      localStorage.setItem('i', '1')
      window.location.reload();
      
      }else{
        localStorage.setItem('i', '0')
      }
  }

}
