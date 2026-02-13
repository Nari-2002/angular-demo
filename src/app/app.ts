import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo } from '../components/demo/demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Demo,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:string="narendra"
  title = 'angular-demo';
  sayHi(){
    alert("hello")
  }
}
