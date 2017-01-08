import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkService } from "../work.service";

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
    workData = [];
    constructor(
        private route: ActivatedRoute,
        private _httpService: WorkService
            ) { }

    ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
        this._httpService
            .getWorkItemById(id)
            .subscribe(data => this.workData = data);
        });
    }


}
