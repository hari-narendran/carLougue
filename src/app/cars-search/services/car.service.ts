import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Car } from '../models/car.interface';
import { CarTrip } from '../models/carTrip.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  API_KEY = 'ql5XN29gNcX7waixhNMqjg==MivsPbboC6BYYP3E';
  // API_URL = `https://api.api-ninjas.com/v1/cars?model=${model}`;

  carSignal = signal<any>([]);
  carTripSignal = signal<CarTrip[]>([{"createdAt": '02/01/2023', carMakes: []}])

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
        console.log(carsData);
        this.carSignal.update((cars) => carsData);
      });
  }

  searchCars(searchText: string) {
    console.log('Car Search!');
    const url = `http://localhost:3000/search?q=${searchText}`;
    this.http
      .get<any>(url, {
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((carsData) => {
        console.log(carsData);
        carsData.forEach((car: Car) => {
          car.seenCount = 0;
        });
        this.carSignal.update((cars) => carsData);
        //this.carSignal.set(carsData)
      });
  }

  getAllCars() {
    console.log('Car Search!');
    const url = `http://localhost:3000/carmakes`;
    this.http
      .get<any>(url, {
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((carsData) => {
        console.log(carsData);
        this.carSignal.update((cars) => carsData);
        //this.carSignal.set(carsData)
      });
  }

  saveTrip(carsOnTrip: any) {
    console.log('Save Trip');
    const tripData = {
      createdAt: Date.now(),
      carMakes: carsOnTrip,
    };
    const url = `http://localhost:3000/saveTrips`;
    const headers = { 'Content-Type': 'application/json' };
    this.http
      .post<any>(url, JSON.stringify(tripData), { headers })
      .subscribe((data) => {
        console.log(data);
        this.clearCarSignal();
      });
  }

  getAllTrips() {
    console.log('Get car trips');
    const url = `http://localhost:3000/getAllTrips`;
    this.http
      .get<any>(url, {
        responseType: 'json', // Explicitly set responseType for clarity
      })
      .subscribe((tripsData) => {
        console.log(tripsData);
        this.carTripSignal.update((trips) => tripsData);
      });
  }

  clearCarSignal() {
    this.carSignal.update((cars) => []);
  }
}
