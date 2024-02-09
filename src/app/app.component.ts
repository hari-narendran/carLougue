import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoggingScreenComponent } from './logging-screen/logging-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeScreenComponent, LoggingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'carLougue';
}
