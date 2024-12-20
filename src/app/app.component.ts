import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { CardsComponent } from "./ui/cards/cards.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'ecom';

  ngOnInit(): void {
      initFlowbite();
  }
}
