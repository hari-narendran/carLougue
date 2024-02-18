import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FooterComponent {
  todosService = inject(TodoService);
  filterSig = this.todosService.filterSignal;
  filterEnum = FilterEnum;

  activeCount = computed(() => {
    return this.todosService.todoSignal().filter((todo) => !todo.isCompleted).length
  })

  noTodosClass = computed(() => this.todosService.todoSignal().length === 0)

  itemsLeftText = computed(() => `item${this.activeCount() !== 1 ? 's' : ''} left`)

  changeFilter(event: Event, filterName: FilterEnum) {
    event.preventDefault();
    this.todosService.changeFilter(filterName)
  }
}
