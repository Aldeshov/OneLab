import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input() zoomEffect: number = 10;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(`Effect: ${this.zoomEffect}`)

    let boldLevel = 100;
    if (this.zoomEffect <= 4) boldLevel = 100;
    if (this.zoomEffect <= 10) boldLevel = 100 * this.zoomEffect - 300;
    if (this.zoomEffect > 10) boldLevel = 800;
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'cyan');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', boldLevel);
    this.renderer.setStyle(this.elementRef.nativeElement, 'zoom', `${this.zoomEffect / 5 * 100}%`);
  }
}
