import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
   title = 'Gestão de Custos — Mini App';
}

export interface Center {
  id: string;
  name: string;
  description?: string;
}

export interface Expense {
  id?: string;
  centerId: string;
  description: string;
  value: number;
  date: string; // YYYY-MM-DD
}