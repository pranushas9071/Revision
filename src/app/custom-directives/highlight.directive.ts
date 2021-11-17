import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.fontStyle = 'italic';
    el.nativeElement.style.color = 'purple';
  }
}
