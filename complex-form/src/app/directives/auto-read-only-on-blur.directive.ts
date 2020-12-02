import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoReadOnlyOnBlur]'
})
export class AutoReadOnlyOnBlurDirective {


  @HostBinding('readOnly') isReadOnly = false;

  @HostListener('blur', ['$event']) checkIt(event: Event): void {
    console.log('BLUR');
    const targetInput: any = event.target;
    if (targetInput.value) {
      this.isReadOnly = true;
    }
  }


  constructor() { }

}
