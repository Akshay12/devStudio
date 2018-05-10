import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarChartComponent } from './skills/bar-chart/bar-chart.component';
import { HomeComponent } from './home/home.component';

import {appRoutingProviders, routing} from './app.routing';
import { FacesComponent} from './faces/faces.component';
import {MemberBioComponent} from "./member-bio/member-bio.component";

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    FacesComponent,
    HomeComponent,
    MemberBioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    
  ],
  exports: [
    MemberBioComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
