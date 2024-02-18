import { Component, computed, inject } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [],
  providers: [CarService],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  carService = inject(CarService);

  // carData = this.carService.carSignal;
  /* carData = computed(() => {
    console.log(this.carService.carSignal());
    return this.carService.carSignal();
  }); */

  testClick() {
    console.log(this.carService.carSignal());
  }

  /* ngOnInit(){
    console.log(this.carData())
  } */
}
