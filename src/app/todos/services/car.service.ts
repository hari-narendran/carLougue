import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  API_KEY = 'ql5XN29gNcX7waixhNMqjg==MivsPbboC6BYYP3E';
  // API_URL = `https://api.api-ninjas.com/v1/cars?model=${model}`;

  carSignal = signal<any>([]);

  fetchCars1(model: String) {
    console.log('Search');
    console.log(model);
  }

  fetchCars(model: String) {
    console.log('Search');
    const apiKey = '';
    const url = `https://api.api-ninjas.com/v1/cars?model=${model}`;
    const headers = {
      headers: { 'X-Api-Key': apiKey },
      responseType: 'json', // Explicitly set responseType for clarity
    };
    this.http
      .get<any>(url, {
        headers: { 'X-Api-Key': this.API_KEY },
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((carsData) => {
        console.log(carsData)
        this.carSignal.update((cars) => carsData)
      });
  }
}
