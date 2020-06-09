import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color = 'orange';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {textDecoration?: string, textTransform?: string, bg?: string};

  @HostBinding('style.backgroundColor') bg = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(event: Event) { console.log(event); }
  @HostListener('mouseenter', ['$event']) onEnter(event: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);
    this.renderer.setStyle(this.elRef.nativeElement, 'textDecoration', this.dStyles.textDecoration);
    this.renderer.setStyle(this.elRef.nativeElement, 'textTransform', this.dStyles.textTransform);
    this.bg = this.dStyles.bg;
  }
  @HostListener('mouseleave', ['$event']) onLeave(event: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.elRef.nativeElement, 'textDecoration', null);
    this.renderer.setStyle(this.elRef.nativeElement, 'textTransform', null);
    this.bg = null;
  }

}
