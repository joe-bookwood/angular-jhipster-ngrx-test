import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userId: number;

  constructor() { }

  ngOnInit() {
    this.userId = 1;
  }

  sendLoadAction():void{

  }

}