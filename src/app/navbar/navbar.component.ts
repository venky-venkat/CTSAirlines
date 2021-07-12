import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username : any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedUser');
  }

  logout(){
    this.router.navigate(['']);
  }

}
