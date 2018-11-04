import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherSettings, TemperatureScale, ForecastMode, WeatherLayout } from 'angular-weather-widget';

/**
 * Dashboard component to display weather
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private weatherService: WeatherService) { 
    
  }

  /*settings: WeatherSettings = {
    location: {
      cityName: 'Szczecin'
    },
    backgroundColor: '#347c57',
    color: '#ffffff',
    width: '300px',
    height: 'auto',
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    forecastMode: ForecastMode.DETAILED,
    showDetails: false,
    showForecast: true,
    layout: WeatherLayout.WIDE,
    language: 'en'
  };*/

  /**
   * wait for the response of getIdCity and affect new variables
   * 
   */
  ngOnInit() {
    this.weatherService.getIdCity(this.city)
      .subscribe(data => {
        this.id = data.id;
        this.weather = data.weather[0].main;  
        console.log(data);
      }
        )
      ;
  }

  /**
   * function who check if there is any action on the input
   * @param event event of the input
   */
  onKey(event: any) { // without type info
    this.city = event.target.value;
    this.ngOnInit();
  }

  city: string = "London";;
  id = "";
  weather = "";

}
