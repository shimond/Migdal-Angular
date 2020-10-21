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
    this.init();
    this.usersService.getAllUsers().subscribe(o => {
      this.users = o;
    });
  }

  divWithPromise(num1, num2): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        if (num2 !== 0) {
          // resolve(num1 / num2);
        } else {
          reject('div by 0 error');
        }
      }, 3000);
    });
  }


  init() {
    console.log('1');
    this.deleteUser(1);
    console.log('2');
  }

  async deleteUser(uid: number) {
    console.log('3');
    await this.usersService.deleteUser(uid);
    console.log('4');
  }

  async usePromiseEx(uid: number): Promise<void> {
    // calbacks:
    // // this.div(10, 50, result => { }, error => { });

    // promise with callbacks
    // const promise = this.divWithPromise(10, 50);
    // promise.then(res => {
    //   alert('result = ' + res);
    // });

    // promise.catch(error => {
    //   alert('SORRY...' + error);
    // });
    // with async & await
    try {
      const res = await this.divWithPromise(10, 50);
      alert('result = ' + res);
    } catch (error) {
      alert('SORRY...' + error);
    }

    for (let index = 0; index < 100; index++) {
      // this.divWithPromise(index, index)
      //   .then(x => console.log(x));
      const x = await this.divWithPromise(index, index);
      console.log(x);
    }
  }






  div(num1, num2, successFunction, errorFunction): void {
    setTimeout(() => {
      if (num2 !== 0) {
        successFunction(num1 / num2);
      } else {
        errorFunction('div by 0 error');
      }
    }, 3000);
  }



}
