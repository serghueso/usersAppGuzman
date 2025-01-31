import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.component.html',
  //styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  @Input() users: User[] = [];

  users2: User[] = [];
  
    constructor(private service: UserService) {
  
    }
    ngOnInit(): void {
      this.service.findAll().subscribe(users => {
        console.log (users)
        this.users2 = users
      });
    }
}
