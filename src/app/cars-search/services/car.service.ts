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

  carSignal = signal<any>(['Test Car']);

  fetchCars1(model: String) {
    console.log('Car Search');
    const url = `http://localhost:3000/search?q=${model}`;
    this.http
      .get<any>(url, {
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((carsData) => {
        console.log(carsData)
        this.carSignal.update((cars) => carsData)
      });
  }

  fetchCars(searchText: String) {
    console.log('Search');
    const apiKey = '';
    const url = `https://api.api-ninjas.com/v1/cars?model=${searchText}`;
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

  searchCars(searchText: string){
    console.log('Car Search!');
    const url = `http://localhost:3000/search?q=${searchText}`;
    this.http
      .get<any>(url, {
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((carsData) => {
        console.log(carsData)
        this.carSignal.update((cars) => carsData)
        //this.carSignal.set(carsData)
      });
  }

  getAllCars(){
    console.log('Car Search!');
    const url = `http://localhost:3000/carmakes`;
    this.http
      .get<any>(url, {
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((carsData) => {
        console.log(carsData)
        this.carSignal.update((cars) => carsData)
        //this.carSignal.set(carsData)
      });
  }
}
