import { Component, EventEmitter, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  providers: [CarService],
  standalone: true,
})
export class HeaderComponent {
  carService = inject(CarService);
  carData = this.carService.carSignal;
  searchText = '';
  keyEvents: EventEmitter<any> = new EventEmitter();

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
  ngOnInit() {
    /* this.keyEvents.pipe(debounceTime(1000)).subscribe(searchText => {
        console.log(searchText)
        this.carService.searchCars(searchText)
    }) */
  }
}
