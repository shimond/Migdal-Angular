import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(value: boolean) {
    if (value) {
      this.addElement();
    } else {
      this.removeElement();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }


  addElement() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  removeElement() {
    this.viewContainerRef.clear();
  }

}
