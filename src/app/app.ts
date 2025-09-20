import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule

import { NgChartsModule } from 'ng2-charts';
import { Centers } from './components/centers/centers';
import { Expenses } from './components/expenses/expenses';
import { Dashboard } from './components/dashboard/dashboard';
import { routes } from './app.routes'; // Import routes

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
   title = 'Gestão de Custos — Mini App';
}

@NgModule({
  declarations: [
    AppComponent,
    Centers,
    Expenses,
    Dashboard
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Add RouterModule here
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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