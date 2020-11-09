import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  @Input() enterColor = 'green';
  @Input() originalColor = 'black';


  @HostBinding('style.color') currentColor: string;


  @HostListener('mouseenter') changeColor(): void {
    this.currentColor = this.enterColor;
  }

  @HostListener('mouseleave') changeColorBack(): void {
    this.currentColor = this.originalColor;
  }

  // constructor(private el: ElementRef, private renderer: Renderer2) {
  //   renderer.listen(el.nativeElement, 'mouseenter', () => {
  //     renderer.setStyle(el.nativeElement, 'color', this.enterColor);
  //   });

  //   renderer.listen(el.nativeElement, 'mouseleave', () => {
  //     renderer.setStyle(el.nativeElement, 'color', 'red');
  //   });
  // }

}
