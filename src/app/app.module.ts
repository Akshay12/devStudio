import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BarChartComponent } from './skills/bar-chart/bar-chart.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { appRoutingProviders, routing } from './app.routing';
import { FacesComponent} from './faces/faces.component';
import {MemberBioComponent} from "./member-bio/member-bio.component";

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    ProjectCardComponent,
    FacesComponent,
    HomeComponent,
    MemberBioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    MemberBioComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
