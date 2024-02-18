import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { TodoComponent } from "./components/todo/todo.component";

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    standalone: true,
    imports: [CommonModule,HeaderComponent, MainComponent, FooterComponent, TodoComponent]
})

export class TodosComponent {}