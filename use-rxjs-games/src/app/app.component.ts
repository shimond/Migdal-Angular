import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval, Observable } from 'rxjs';
import { publish, refCount, shareReplay, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'use-rxjs-games';

  ngOnInit(): void {
    // this.rxjsGames1();
    this.rxjsGames2();
  }

  getPromise(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log('IN PROMISE CODE');
      console.log('IN PROMISE CODE');
      console.log('IN PROMISE CODE');
      console.log('IN PROMISE CODE');
      console.log('IN PROMISE CODE');
      console.log('IN PROMISE CODE');
      resolve('PROMISE RESULT');
    });
  }

  promiseGames(): void {
    this.getPromise().then((result) => {
      console.log('FROM PROMISE - RESULT = ' + result);
    });
    console.log('Last line of code (promise example)');
  }

  rxjsGames1(): void {
    const observable = new Observable<any>(obs => {
      console.log('observable started.');
      obs.next(1);
      console.log('observable After next 1.');
      obs.next(2);
      console.log('observable After next 2.');
      obs.complete();
    });

    observable.subscribe(
      {
        next: x => {
          console.log('A Next - ' + x);
        },
        complete: () => {
          console.log('A Completed');
        }
      });

    observable.subscribe(
      {
        next: x => {
          console.log('B Next - ' + x);
        },
        complete: () => {
          console.log('B Completed');
        }
      });


    console.log('Last line of code...');
  }

  rxjsGames2(): void {


    // const intervalObs = interval(1000).pipe(publish()) as ConnectableObservable<any>;
    // intervalObs.connect(); // start

    
    const observable1 = interval(1000).pipe(publish(), refCount());
    const withTap = observable1.pipe(tap(val => console.log('IN TAP =' + val)));

    // const observable2 = observable1.pipe(publish(), refCount());


    // observable2.subscribe(x => console.log('VALUE = ' + x));
    // setTimeout(() => {
    //   observable2.subscribe(x => console.log('OTHER VALUE = ' + x));
    // }, 5000);


  }






}
