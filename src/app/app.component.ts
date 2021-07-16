import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'VKairlines';
  public username:any;
  public isloggedin:boolean=false;
  constructor(private loginservice: LoginService){

  }
  
  ngOnInit(): void {

    this.username = sessionStorage.getItem('loggedUser');
    if (this.username == "" || this.username == undefined || this.username == null ){
      this.isloggedin = false;
    }
    else
    {
      this.isloggedin = true;
    }
  }
}
