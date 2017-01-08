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
    this.onPageLoad();
  }
  workData = [];
  getData:string;
  postData:string;

    workItems = [{
        id:"1",
        projectName:"Taxi Booking System",
        client:"Smart Taxi",
        description:"This was my final year school project. It is a taxi reservation system that allows users to book a taxi using any device. The system also allows the tracking of a taxi driver’s location in real time. ",
        category:"DESIGN / APP DEV",
        projectImage:"http://emmancipatemusemwa.com/img/smart2.jpg",
        projectWorkImage:"http://emmancipatemusemwa.com/img/route_taxi.jpg",
        className:"col-xs-7"
    },{
        id:"2",
        projectName:"TOLUCA",
        client:"Toluca Media",
        description:"The website was designed for a media company locat... ",
        category:"DESIGN / BRANDING",
        projectImage:"http://emmancipatemusemwa.com/img/toluca-card2.jpg",
        projectWorkImage:"http://emmancipatemusemwa.com/img/toluca_screens.jpg",
        className:"col-xs-5"
    }]

    onPageLoad(){
        this._httpService.getWorkItems()
            .subscribe(
            data => this.workData = data,
            error => alert(error),
            () => console.log("Finished")
        );
        console.log(this.workData)
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
