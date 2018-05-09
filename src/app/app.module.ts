import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BarChartComponent } from './skills/bar-chart/bar-chart.component';
import { HomeComponent } from './home/home.component';

import {appRoutingProviders, routing} from './app.routing';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FacesComponent} from './faces/faces.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ProjectCardComponent,
    FacesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
