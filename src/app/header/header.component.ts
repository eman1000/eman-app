import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	showMenu;
  	constructor() { 
		this.showMenu == true
  	}

  ngOnInit() {
  }
	openMenu(value){
		if(this.showMenu == true) {
			this.showMenu = false;
		}else{
			this.showMenu = true;
		}	
	}
	handleShowOpenClicked(value){
		if(value == false){
			this.showMenu = false;
		}
	}
}
