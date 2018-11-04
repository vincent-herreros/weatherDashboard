import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularWeatherWidgetModule.forRoot({
      key: "84f974edf2647dbcd7666bc18332d9ac",
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
