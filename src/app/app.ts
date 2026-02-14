import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo } from '../components/demo/demo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Demo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-demo');
}
