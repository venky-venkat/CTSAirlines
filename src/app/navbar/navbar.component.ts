import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username : any;
  islogged:boolean=false;
  constructor(private router:Router,private service:LoginService) { }

  ngOnInit(): void {
    this.islogged = this.service.Isloggedin;
    this.username = sessionStorage.getItem('loggedUser');
  }

  logout(){
    this.router.navigate(['']);
  }

}
