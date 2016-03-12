import {Bottle} from './../bottle/bottle';
import {BOTTLES} from './../mock-bottles/mock-bottles';
import {Injectable} from 'angular2/core';

@Injectable()
export class BottleService {
    getBottles() {
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
