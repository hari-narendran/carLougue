import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TodoComponent {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  @ViewChild('textInput') textInput?: ElementRef;

  todoService = inject(TodoService);
  editingText: string = '';

  ngOnInit() {
    this.editingText = this.todo.text;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isEditing']?.currentValue) {
      setTimeout(() => {
        this.textInput?.nativeElement.focus();
      }, 0);
    }
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }
  changeToDo() {
    console.log('Enter');
    this.todoService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }

  setTodoInEditMode() {
    this.setEditingId.emit(this.todo.id);
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo.id);
  }

  toggleTodo() {
    this.todoService.toggleTodo(this.todo.id);
  }
}
