import { signal } from '@angular/core';
import { Car } from '../models/car.interface';

export class CarmakesService {
  //private carmakes: Car[];

  carmakes = signal<Car[]>([
    { "id": 1, "name": 'Bentley' },
    { "id": 2, "name": 'Mercedes-Benz' },
    { "id": 3, "name": 'Volkswagen' },
    { "id": 4, "name": 'Renault' },
    { "id": 5, "name": 'McLaren' },
  ]);

  /* constructor() {
    this.carmakes = [];
  } */

  getCar() {
    return this.carmakes();
  }

  addCar(car: Car) {
    this.carmakes.update((carmakes) => [...carmakes, car]);
  }
}
