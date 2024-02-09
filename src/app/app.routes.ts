import { Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoggingScreenComponent } from './logging-screen/logging-screen.component';

export const routes: Routes = [
    {path: 'home', component: HomeScreenComponent},
    {path: 'log', component: LoggingScreenComponent},
    {path: '', redirectTo:'/home', pathMatch: 'full'}
];
