import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from './LoginDTO';
import { Loginresult } from './Loginresult';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router:Router) {
    this.registeredusers();
  }

  public RegisteredUsers: any[] = [];
  public Isloggedin:boolean=false;
  registeredusers() {
    this.RegisteredUsers.push([
      {
        username: 'admin',
        password: '123',
        role: 'admin',
      },
      {
        username: 'user',
        password: '123',
        role: 'user',
      },
    ]);
  }

  

  Isvaliduser(login: LoginDTO): Loginresult {
    var l = new Loginresult();
    const user = this.RegisteredUsers[0].find(
      (x: any) => x.username == login.username && x.password == login.password
    );
    if (!user) {
      l.username = '';
      l.role = '';
      this.Isloggedin=false;
      this.router.navigate(['/']);
      return l;
    } else {
      l.username = user.username;
      l.role = user.role;
      this.Isloggedin =true;
      this.router.navigate(['/Navbar']);
      return l;
    }
  }
}
