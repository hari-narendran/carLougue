import { Component, computed, inject } from '@angular/core';
import { CarmakesService } from '../../services/carmakes.service';
import { Car } from '../../models/car.interface';

@Component({
  selector: 'app-search-results',
  standalone: true,
  // providers: [CarmakesService],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  carmakesService = inject(CarmakesService);

  carmakes = computed(() => {
    return this.carmakesService.carmakes();
  });

  addCar(carmake: Car, event: Event) {
    if (event.type) this.carmakesService.addCar(carmake);
    console.log(this.carmakesService.getCar());
  }

  removeCar(carmake: Car, event: Event) {
    this.carmakesService.removeCar(carmake);
    console.log(this.carmakesService.getCar());
  }
}
