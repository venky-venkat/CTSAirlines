import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginDTO } from '../services/LoginDTO';
import { Loginresult } from '../services/Loginresult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:any;
  public password:any;
  @Output() myevent = new EventEmitter<string>();
  constructor(private router : Router, private loginservice: LoginService) { }

  ngOnInit(): void {
    sessionStorage.setItem('loggedUser',"");
    sessionStorage.setItem('role',"");
    console.log("logged In User" + sessionStorage.getItem('loggedUser'));
    console.log("logged In User Role" + sessionStorage.getItem('role'));
  }

  handleLoginClick(){
    console.log(this.username + " " + this.password );
    var logindetails = new Loginresult();
    var Logindto = new LoginDTO();
    Logindto.username = this.username;
    Logindto.password = this.password;
    logindetails = this.loginservice.Isvaliduser(Logindto);

    if(logindetails.username != "" ){
      sessionStorage.setItem('loggedUser',logindetails.username?logindetails.username:"");
      sessionStorage.setItem('UserID', logindetails.id? logindetails.id.toString():"0");
      this.redirectuseronrole(logindetails.role);
    } else {
      alert('Login Falied, Please try again with valid credentials');
    }
   
  }

  redirectuseronrole(role:any){
    if(role=="admin"){
      sessionStorage.setItem('role',role);
      this.router.navigate(['/manageairlines']);
    } 
    else if (role=="user"){
      sessionStorage.setItem('role',role);
      this.router.navigate(['/bookflight']);
    }
  }

}
