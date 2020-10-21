import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MockUsersService {

  baseUrl = `${environment.serverUrl}/users`;

  getAllUsers(): Observable<UserModel[]> {
    // const s = new EventEmitter<UserModel[]>(); // hot
    return this.httpClient.get<UserModel[]>(this.baseUrl); // cold
  }

  getUserById(id: number) {

  }

  updateUser(u: UserModel) {

  }

  addNewUser(u: UserModel) {

  }

  deleteUser(uid: number): Promise<any> {
    return this.httpClient.delete(`${this.baseUrl}/${uid}`).toPromise();
  }

  constructor(private httpClient: HttpClient) { }
}


// set options:
    // delete user
    // update user
    // addUser
    // openGate
    // change modified date
