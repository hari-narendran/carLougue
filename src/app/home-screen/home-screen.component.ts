import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, HistoryComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.sass'
})
export class HomeScreenComponent {

}
