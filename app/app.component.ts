import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from 'app/hero.service/hero.service';
import { HeroesComponent } from 'app/heroes.component';
import { HeroDetailComponent } from 'app/hero-detail.component';
import { DashboardComponent } from 'app/dashboard.component/dashboard.component';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
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
        HeroService
    ]
})

@RouteConfig([
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])


export class AppComponent {
    title = 'Tour of Heroes';
}
