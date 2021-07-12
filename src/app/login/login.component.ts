import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:any;
  public password:any;
  @Output() myevent = new EventEmitter<string>();
  constructor(private router : Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('loggedUser',"");
    console.log(sessionStorage.getItem('loggedUser'));
  }

  handleLoginClick(){
    console.log(this.username + " " + this.password );
    if(this.username && this.password){
      this.authenticateUser(this.username);
    } else {
      alert('enter username and password');
    }
   
  }

  authenticateUser(userName:any){
    if(userName == "admin" || userName == "user"){
      sessionStorage.setItem('loggedUser',userName);
      this.router.navigate(['/Navbar']);
    } 
  }

}
