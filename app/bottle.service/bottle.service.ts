import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Bottle} from './../bottle/bottle';
import {BOTTLES} from './../mock-bottles/mock-bottles';

//Check:
// https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/

@Injectable()
export class BottleService {

    constructor (private http: Http) {}

    private _bottlesUrl = 'http://104.236.28.133:8080/prices/reductions';

    getVP () {
        return this.http.get(this._bottlesUrl)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    getBottles() {
        const somebottles = this.getVP()
            .subscribe(
                bottles => console.log(bottles),
                error =>  console.log(error));
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
