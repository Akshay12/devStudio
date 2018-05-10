import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BarChartComponent } from './skills/bar-chart/bar-chart.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { appRoutingProviders, routing } from './app.routing';
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
    routing,
    HttpClientModule,
    BarChartModule,
    BrowserAnimationsModule,
     NgxChartsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
