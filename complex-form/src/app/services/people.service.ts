import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }


  getPersonToEdit(): Promise<Person> {
    return new Promise((resolve, rej) => {
      setTimeout(() => {
        const p: Person = {
          firstName: 'David',
          lastName: 'Levi',
          fullName: 'David Levi',
          email: undefined,
          children: [
            {
              fullName: 'moshe Cohen',
              homeAddress: { country: 'Israel', city: 'Jerusalem' }
            },
            {
              fullName: 'Naama Cohen',
              homeAddress: { country: 'Israel', city: 'Karnash' }
            }
          ],
          homeAddress: { country: 'Israel', city: 'Tel Aviv' },
          workAddress: { country: 'Israel', city: 'Raanana' },

        };
        resolve(p);
      }, 1000);


    });



  }
}
