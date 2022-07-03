import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';
import { loadUser } from '../user/store/user.actions';
import { userSelector } from '../user/store/user.selectors';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  public userId: number;
  user$: Observable<IUser | undefined>;

  constructor(private store: Store) {
    this.user$ = this.store.pipe(select(userSelector));
  }

  ngOnInit() {
    this.userId = 1;
  }

  sendLoadAction(payload: number): void {
    console.log('id=', payload);
    this.store.dispatch(loadUser({ payload }));
  }
}
