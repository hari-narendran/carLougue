import { signal } from '@angular/core';
import { Car } from '../models/car.interface';

export class CarmakesService {
  //private carmakes: Car[];

  /* carmakes = signal<Car[]>([
    { id: 1, name: 'Bentley', seenCount: 0 },
    { id: 2, name: 'Mercedes-Benz', seenCount: 0 },
    { id: 3, name: 'Volkswagen', seenCount: 0 },
    { id: 4, name: 'Renault', seenCount: 0 },
    { id: 5, name: 'McLaren', seenCount: 0 },
  ]); */
  carmakes = signal<Car[]>([]);

  /* constructor() {
    this.carmakes = [];
  } */

  getCar() {
    return this.carmakes();
  }

  addCar(car: Car) {
    this.carmakes.update((cars: Car[]) => {
      if (cars.find((carmake) => car.name === carmake.name)) {
        car.seenCount++;
        return cars;
      } else {
        car.seenCount = 1;
        return [...cars, car];
      }
    });
  }

  removeCar(car: Car) {
    this.carmakes.update((cars: Car[]) => {
      if (cars.find((carmake) => car.name === carmake.name)) {
        car.seenCount--;
        // remove car make when count is less than 1
        if (car.seenCount <= 0) {
          return cars.filter((c) => c.name != car.name);
        }
        return cars;
      }
      return cars;
    });
  }
}
