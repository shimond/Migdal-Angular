import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyHebrew]'
})
export class OnlyHebrewDirective {

  @HostBinding('class.key-not-valid') isNotValid = false;

  @HostListener('keypress', ['$event']) onKeyPress(e: KeyboardEvent): void {
    if (e.keyCode >= 1488 && e.keyCode <= 1514) {
      console.log('Hebrew');
    } else {
      this.isNotValid = true;
      setTimeout(() => {
        this.isNotValid = false;
      }, 500);
      e.preventDefault();
    }
  }

  constructor() { }

}

