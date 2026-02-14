import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [FormsModule,CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  bg:string="hi"
}
