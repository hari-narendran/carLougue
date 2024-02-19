import { Component, computed, inject } from '@angular/core';
import { CarmakesService } from '../../services/carmakes.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  // providers: [CarmakesService],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {

  carmakesService = inject(CarmakesService)

  carmakes = computed( () => {
    return this.carmakesService.carmakes()
  })

  testClick() {
    console.log(this.carmakesService.carmakes())
    console.log(this.carmakesService.getCar())
  }
}
