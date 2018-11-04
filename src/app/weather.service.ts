import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

/**
 * Weather service
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { 

  }

  /**
   * Url for the API
   */
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';  // URL to web api

  /**
   * get the id of the city with the API of open weather map
   * @param city city of the user
   */
  getIdCity (city): any {
    const url = `${this.weatherUrl}?q=${city}&&APPID=84f974edf2647dbcd7666bc18332d9ac`;
    return this.http.get<string>(url);
  }

}
