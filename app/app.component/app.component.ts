import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { BottleService }     from '../bottle.service/bottle.service';
import { BottlesComponent } from '../bottles.component/bottles.component';
import { BottleDetailComponent } from '../bottle-detail.component/bottle-detail.component';
import { DashboardComponent } from 'app/dashboard.component/dashboard.component';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component/app.component.css'],
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        BottleService
    ]
})

@RouteConfig([
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: BottleDetailComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/bottles',
        name: 'Heroes',
        component: BottlesComponent
    }
])


export class AppComponent {
    title = 'Tour of Heroes';
}
