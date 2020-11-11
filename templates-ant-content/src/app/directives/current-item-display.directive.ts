import { Directive, Input, OnInit, setTestabilityGetter, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCurrentItemDisplay]',
  exportAs: 'appCurrentItemDisplay'
})
export class CurrentItemDisplayDirective implements OnInit {

  context: any;
  intervalId = null;
  @Input() appCurrentItemDisplayInside: Array<any>;
  @Input() appCurrentItemDisplayDelay = 1000;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }


  ngOnInit(): void {
    let currentCount = 0;
    this.context = {
      $implicit: this.appCurrentItemDisplayInside[currentCount]
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);

    this.intervalId = setInterval(() => {
      currentCount++;
      if (currentCount === this.appCurrentItemDisplayInside.length) {
        this.stop();
        return;
      }
      this.context.$implicit = this.appCurrentItemDisplayInside[currentCount];
    }, this.appCurrentItemDisplayDelay);
  }

  stop(): void {
    clearInterval(this.intervalId);
  }

}
