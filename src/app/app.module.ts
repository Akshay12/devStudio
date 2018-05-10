import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { BarChartComponent } from './skills/bar-chart/bar-chart.component';
import { HomeComponent } from './home/home.component';

import {appRoutingProviders, routing} from './app.routing';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    HomeComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
