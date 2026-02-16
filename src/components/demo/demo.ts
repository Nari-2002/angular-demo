import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css'],
})
export class Demo {
  bg: string = "hi";
  list: string[] = ["a", "b", "c"];
}
