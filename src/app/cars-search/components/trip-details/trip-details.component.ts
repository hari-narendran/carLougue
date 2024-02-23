import { Component, computed, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css',
})
export class TripDetailsComponent {

  carService = inject(CarService);

  tripData = computed(() => {
    return this.carService.carTripSignal()
  });

  ngOnInit(){
    this.carService.getAllTrips();
    console.log(this.tripData())
  }
}
