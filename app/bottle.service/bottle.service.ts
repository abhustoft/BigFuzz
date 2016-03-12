import {Bottle} from './../bottle/bottle';
import {BOTTLES} from './../mock-heroes/mock-heros';
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
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }

}
