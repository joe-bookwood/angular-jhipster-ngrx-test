import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUser } from '../user/store/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userId: number;

  constructor(private store: Store) { }

  ngOnInit() {
    this.userId = 1;
  }

  sendLoadAction(payload: number):void{
    console.log('id=',payload);
    this.store.dispatch(loadUser({payload}));
  }

}
