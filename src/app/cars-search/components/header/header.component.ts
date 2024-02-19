import { Component, EventEmitter, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { debounceTime } from 'rxjs';
import { Car } from '../../models/car.interface';
import { CarmakesService } from '../../services/carmakes.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  // providers: [CarService, CarmakesService],
  standalone: true,
})
export class HeaderComponent {
  carService = inject(CarService);
  carmakesService = inject(CarmakesService)
  carData = this.carService.carSignal;
  searchText = '';
  keyEvents: EventEmitter<any> = new EventEmitter();
  selectedCars = []

  changeText(event: Event) {
    console.log('key ...');
    console.log(event)
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    /* setTimeout(() => {
      this.carService.searchCars(this.searchText);
    }, 2000); */
    //this.keyEvents.emit(this.searchText)
    console.log(target.value)
    // this.carService.searchCars(this.searchText)
  }

  searchCar() {
    //const target = event.target as HTMLInputElement;
    console.log('Click Search');
    console.log(this.carService);
    this.carService.searchCars(this.searchText);
  }
  
  clearSearch(){
    this.searchText = '';
    this.carService.clearCarSignal();
  }

  addCar(carmake: Car){
    console.log(carmake)
    this.carmakesService.addCar(carmake)
    console.log(this.carmakesService.getCar())
  }
}
