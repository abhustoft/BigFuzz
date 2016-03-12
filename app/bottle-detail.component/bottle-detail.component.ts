import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { BottleService } from './../bottle.service/bottle.service';
import {Bottle} from './../bottle/bottle';
@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/bottle-detail.component/bottle-detail.component.html',
    styleUrls: ['app/bottle-detail.component/bottle-detail.component.css'],
    inputs: ['hero']
})
export class BottleDetailComponent {
    hero: Bottle;
    constructor(
        private _heroService: BottleService,
        private _routeParams: RouteParams) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getBottle(id)
            .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }

}
