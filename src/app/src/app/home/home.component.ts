import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  dataSource = new UserDataSource(this.appService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private appService: AppService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.appService.getUsers();
  }
  disconnect() {}
}