import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userObj: UserForm = new UserForm('admin', 'admin');

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

  }

  loginAction = (cfgForm: UserForm) => {
    if (this.userObj.username == 'admin' && this.userObj.password == 'admin') {
      this.appService.navigate('/home');
    } else {
      this.appService.snackBarInfo('Invalid username and password', 'X', 'style-error');
      return false;
    }
  }
}

class UserForm {
  username: string;
  password: string;

  constructor(username:string, password: string) {
    this.username = username;
    this.password = password;
  }
}
