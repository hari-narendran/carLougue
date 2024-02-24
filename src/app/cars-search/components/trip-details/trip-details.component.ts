import { Component, computed, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { CarTrip } from '../../models/carTrip.interface';

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
    return this.carService.carTripSignal();
  });

  ngOnInit() {
    this.fetchTrips();
    console.log(this.tripData());
  }
  fetchTrips() {
    this.carService.getAllTrips();
  }
  deleteTrip(trip: CarTrip) {
    console.log(trip);
    this.carService.deleteTrip(trip);
  }
}
