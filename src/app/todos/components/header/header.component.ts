import { Component, inject } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { CarService } from "../../services/car.service";

@Component({
    selector: 'app-todos-header',
    templateUrl: './header.component.html',
    providers: [TodoService, CarService],
    standalone: true,
})

export class HeaderComponent {
    todoService = inject(TodoService)
    carService = inject(CarService)
    text: string = ''

    changeText(event: Event){
        const target = event.target as HTMLInputElement;
        this.text = target.value;
        console.log(this.text)
    }

    addTodo() {
        this.todoService.addTodo(this.text);
        this.text='';
    }

    searchCar(){
        //const target = event.target as HTMLInputElement;
        console.log('Click Search')
        console.log(this.carService)
        console.log(this.todoService)
        this.carService.fetchCars(this.text)
    }

}