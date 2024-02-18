import { Component, computed, inject, signal } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { FilterEnum } from "../../types/filter.enum";
import { TodoComponent } from "../todo/todo.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-todos-main',
    templateUrl: './main.component.html',
    standalone: true,
    imports: [TodoComponent, CommonModule]
})

export class MainComponent {
    todoService = inject(TodoService)
    
    editingId: string | null = null;

    isAllTodosSelected = computed(() => {
        this.todoService.todoSignal().every((todo) => todo.isCompleted)
    })

    noTodosClass = computed(() => this.todoService.todoSignal().length === 0)

    visibleTodos = computed(() => {
        const todos = this.todoService.todoSignal();
        const filter = this.todoService.filterSignal()

        if(filter === FilterEnum.active){
            return todos.filter((todo) => !todo.isCompleted)
        } else if (filter === FilterEnum.completed){
            return todos.filter((todo) => todo.isCompleted)
        }
        return todos;
    });

    setEditingId(editingId: string | null) {
        console.log('Set ID')
        this.editingId = editingId;
    }
    toggleAllTodos(event: Event){
        const target = event.target as HTMLInputElement
        this.todoService.toggleAll(target.checked);
    }
    
}