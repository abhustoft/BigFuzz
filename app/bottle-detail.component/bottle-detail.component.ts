import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { BottleService } from './../bottle.service/bottle.service';
import {Bottle} from './../bottle/bottle';
@Component({
    selector: 'my-bottle-detail',
    templateUrl: 'app/bottle-detail.component/bottle-detail.component.html',
    styleUrls: ['app/bottle-detail.component/bottle-detail.component.css'],
    inputs: ['bottle']
})
export class BottleDetailComponent {
    bottle: Bottle;
    constructor(
        private _bottleService: BottleService,
        private _routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._bottleService.getBottle(id)
            .then(bottle => this.bottle = bottle);
    }
    goBack() {
        window.history.back();
    }

}
