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
    heroes: Bottle[] = [];

    constructor(
        private _router: Router,
        private _heroService: BottleService) {
    }

    ngOnInit() {
        this._heroService.getBottles()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
    gotoDetail(hero: Bottle) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }

}


