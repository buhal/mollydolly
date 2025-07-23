import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNav } from './nav/nav';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mollydolly');
}
