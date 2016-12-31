import  { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);