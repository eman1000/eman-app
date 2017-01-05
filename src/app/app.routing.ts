import  { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'work', component: WorkComponent },
	{ path: 'about', component: AboutComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);