import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { interval, Observable } from 'rxjs';
import { UsersModule } from '../../users.module';
import { UserModel } from 'src/app/models/user.model';

@Component({
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {

  users: UserModel[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(o => {
      this.users = o;
    });
  }

  async deleteUser(uid: number): Promise<void> {
    await this.usersService.deleteUser(uid);
  }

}
