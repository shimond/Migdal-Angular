import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private currentLangChanged = new BehaviorSubject<string>('HE');

  get currentLang$() {
    return this.currentLangChanged.asObservable();
  }

  constructor() { }

  changeLanguage(lang: string) {
    this.currentLangChanged.next(lang);
  }
}
