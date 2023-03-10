import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription : Subscription;

  constructor(private userService : UserService) { 
    this.users = [];
    this.userSubscription = new Subscription();
  }


  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users : User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
