import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { WorkComponent } from './work/work.component';

import { WorkService } from "./work.service";
import { WorkItemComponent } from './work-item/work-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    StrikethroughDirective,
    WorkComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
