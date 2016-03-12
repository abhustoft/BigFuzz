import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


import { Bottle } from '../bottle/bottle';
import { BottleService } from '../bottle.service/bottle.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component/dashboard.component.html',
    styleUrls: ['app/dashboard.component/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    bottles: Bottle[] = [];

    constructor(
        private _router: Router,
        private _bottleService: BottleService) {
    }

    ngOnInit() {
        this._bottleService.getBottles()
            .then(bottles => this.bottles = bottles.slice(1,5));
    }
    gotoDetail(bottle: Bottle) {
        let link = ['BottleDetail', { id: bottle.id }];
        this._router.navigate(link);
    }

}


