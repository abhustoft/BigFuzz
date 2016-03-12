import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import {Bottle} from './../bottle/bottle';
import {BottleDetailComponent} from './../bottle-detail.component/bottle-detail.component';
import {BottleService} from './../bottle.service/bottle.service';

@Component({
    selector: 'my-bottles',
    templateUrl: 'app/bottles.component/bottles.component.html',
    styleUrls:  ['app/bottles.component/bottles.component.css'],
    directives: [BottleDetailComponent]
})

export class BottlesComponent implements OnInit {
    bottles: Bottle[];
    selectedBottle: Bottle;
    constructor(
        private _router: Router,
        private _bottleService: BottleService) { }
    getBottles() {
        this._bottleService.getBottles().then(bottles => {
            return this.bottles = bottles});
    }
    ngOnInit() {
        this.getBottles();
    }
    onSelect(bottle: Bottle) { this.selectedBottle = bottle; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedBottle.id }]);
    }
}

