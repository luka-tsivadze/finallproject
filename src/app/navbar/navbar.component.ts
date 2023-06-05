import { Component , OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {map} from 'rxjs'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isregistrated:any=false
  user: any
 upload
  constructor(private  http:HttpClient){
this.getuserinfo()
}

ngOnInit(): void {
     this.isregistr()
     
}
isregistr(){

if(localStorage.getItem('isregistred')){
  this.isregistrated=localStorage.getItem('isregistred');
  JSON.parse(this.isregistrated)
  if(this.user.link==null){
    this.user.link='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
  }

}

}

getuserinfo(){

this.user=JSON.parse(localStorage.getItem('userinfo'))
console.log( this.user)

}
logout(){
  this.upload=confirm('do you want to log out??')
 if(this.upload){
  localStorage.removeItem('userinfo')
  localStorage.removeItem('isregistred')
  window.location.reload();
 }
}
}