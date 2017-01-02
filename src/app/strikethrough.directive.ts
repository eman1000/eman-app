import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
	@HostBinding('class.strike-through') hovering = false;
	@HostListener('mouseenter') onMouseEnter(){
		this.hovering = true;
	}
	@HostListener('mouseleave') onMouseLeave(){
		this.hovering = false;
	}

  constructor() { }

}
