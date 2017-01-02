import { Component, OnInit } from '@angular/core';
import { WorkService } from "../work.service";
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private _httpService: WorkService) { }

  ngOnInit() {
  }
  getData:string;
  postData:string;

  myData = {
  	name:"Proj 1",
  	description:"Proj Descr",
  	category:"Design",
  	client:"Some Client",
  	headerImage:"someImage",
  	projectImages:"sdsssdsd"
  }

  onTestGet(){
  	this._httpService.getCurrentTime()
  		.subscribe(
  			data => this.getData = JSON.stringify(data),
  			error => alert(error),
  			() => console.log("Finished")
		);
  	}
  	onTestPost(){
  		this._httpService.postJSON()
	 		.subscribe(
	  			data => this.postData = JSON.stringify(data),
	  			error => alert(error),
	  			() => console.log("Finished")
			);
  	}
}
