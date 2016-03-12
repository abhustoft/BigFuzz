import {Bottle} from './../bottle/bottle';
import {BOTTLES} from './../mock-bottles/mock-bottles';
import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

//Check:
// https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/

@Injectable()
export class BottleService {

    getVP() {
        //fetchUrl('http://104.236.28.133:8080/prices/list')
        //    .then(function(response) {
        //        return response.json()
        //    }).then(function(json) {
        //    console.log('parsed json', json)
        //}).catch(function(ex) {
        //    console.log('parsing failed', ex)
        //})

    }


    getBottles() {
        this.getVP();
        return Promise.resolve(BOTTLES);
    }
    // See the "Take it slow" appendix
    getBottlesSlowly() {
        return new Promise<Bottle[]>(resolve =>
            setTimeout(()=>resolve(BOTTLES), 2000) // 2 seconds
        );
    }
    getBottle(id: number) {
        return Promise.resolve(BOTTLES).then(
            bottle => bottle.filter(bottle => bottle.id === id)[0]
        );
    }

}
