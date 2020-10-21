import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {


  getAllUsers(): Observable<UserModel[]> {
    return null;
  }

  getUserById(id: number) {
    return null;
  }

  updateUser(u: UserModel) {
    return null;
  }

  addNewUser(u: UserModel) {
    return null;
  }

  deleteUser(uid: number): Promise<any> {
    return null;
  }

  constructor() { }
}
