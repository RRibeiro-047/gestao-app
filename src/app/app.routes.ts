import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';
import { CentersComponent } from './components/centers/centers';
import { ExpensesComponent } from './components/expenses/expenses';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'centers', component: CentersComponent },
  { path: 'expenses', component: ExpensesComponent }
];
