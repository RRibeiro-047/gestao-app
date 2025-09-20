import { Component, OnInit } from '@angular/core';
import { CostService } from '../../services/cost';
import { Center, Expense } from '../../app';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.html',
  styleUrls: ['./expenses.scss']
})
export class ExpensesComponent implements OnInit {
  centers: Center[] = [];
  expenses: Expense[] = [];
  newExpense: Expense = { centerId: '', description: '', value: 0, date: new Date().toISOString().slice(0,10) };
  loading = false;

  constructor(private svc: CostService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.loading = true;
    this.svc.getCenters().subscribe(c => this.centers = c);
    this.svc.getExpenses().subscribe(e => { this.expenses = e; this.loading = false; }, () => this.loading = false);
  }

  addExpense() {
    if (!this.newExpense.centerId) return alert('Escolha um centro');
    if (!this.newExpense.description.trim()) return alert('Descrição vazia');
    this.svc.addExpense(this.newExpense).subscribe(() => {
      this.newExpense = { centerId: '', description: '', value: 0, date: new Date().toISOString().slice(0,10) };
      this.loadAll();
    });
  }

  remove(id?: string) {
    if (!id) return;
    if (!confirm('Excluir despesa?')) return;
    this.svc.deleteExpense(id).subscribe(() => this.loadAll());
  }

  centerName(id: string) {
    return this.centers.find(c => c.id === id)?.name || '—';
  }
}
