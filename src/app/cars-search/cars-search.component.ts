import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CarService } from './services/car.service';
import { CarmakesService } from './services/carmakes.service';

@Component({
  selector: 'app-cars-search',
  standalone: true,
  imports: [CommonModule,HeaderComponent, SearchResultsComponent],
  providers: [CarService, CarmakesService],
  templateUrl: './cars-search.component.html',
  styleUrl: './cars-search.component.css'
})
export class CarsSearchComponent {

  

}
