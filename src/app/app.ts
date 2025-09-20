import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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