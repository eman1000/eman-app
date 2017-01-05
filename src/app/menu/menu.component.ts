import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
showMenu;
@Output() showMenuClicked = new EventEmitter() ;
  constructor() { }

	ngOnInit() {
	}
	openMenu(){
		this.showMenuClicked.emit(this.showMenu = false)		
	}

}
