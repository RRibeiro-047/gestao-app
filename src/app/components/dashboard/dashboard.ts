import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CostService } from '../../services/cost';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faChartPie, 
  faTags, 
  faReceipt, 
  faCalendarAlt, 
  faArrowUp, 
  faArrowDown,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective,
    FontAwesomeModule,
    RouterModule,
    TitleCasePipe
],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnInit {
  // Configuração de datas
  currentDate = new Date().toISOString().slice(0, 7); // YYYY-MM
  month = this.currentDate;
  
  // Dados do dashboard
  total = 0;
  trend = 0;
  centersCount = 0;
  expensesCount = 0;
  
  // Configuração do gráfico
  public pieData: ChartData<'pie', number[], string[]> = { 
    labels: [], 
    datasets: [{ 
      data: [],
      backgroundColor: [
        '#4A6CF7', '#6C63FF', '#00B8D9', '#00BFA5', '#FFAB00', 
        '#FF6D00', '#FF3D00', '#DD2C00', '#5E35B1', '#3949AB'
      ],
      borderWidth: 1
    }] 
  };
  
  public pieOptions: ChartOptions<'pie'> = { 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw as number;
            const total = context.dataset.data.reduce((a, b) => a + (b as number), 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} (${percentage}%)`;
          }
        }
      }
    }
  };

  // Estado
  loading = false;
  
  // Ícones do Font Awesome
  faChartPie = faChartPie;
  faTags = faTags;
  faReceipt = faReceipt;
  faCalendarAlt = faCalendarAlt;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faSpinner = faSpinner;
  
  // Expor Math para o template
  Math = Math;

  constructor(private svc: CostService) { }

  ngOnInit(): void {
    this.loadDashboard();
    this.loadCounts();
  }

  loadDashboard() {
    this.loading = true;
    this.svc.getDashboard(this.month).subscribe({
      next: (d: any) => {
        this.total = d.total;
        const labels = d.summary.map((s: any) => s.center);
        const data = d.summary.map((s: any) => s.total);
        this.pieData = { 
          ...this.pieData,
          labels, 
          datasets: [{
            ...this.pieData.datasets[0],
            data
          }]
        };
        this.calculateTrend();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  
  loadCounts() {
    this.svc.getCenters().subscribe(centers => {
      this.centersCount = centers.length;
    });
    
    this.svc.getExpenses().subscribe(expenses => {
      this.expensesCount = expenses.length;
    });
  }
  
  calculateTrend() {
    // Simulação de cálculo de tendência (substitua por lógica real)
    this.trend = Math.floor(Math.random() * 30) - 15; // Número aleatório entre -15 e 15
  }
  
  getBackgroundColor(index: number): string {
    const colors = [
      '#4A6CF7', '#6C63FF', '#00B8D9', '#00BFA5', '#FFAB00', 
      '#FF6D00', '#FF3D00', '#DD2C00', '#5E35B1', '#3949AB'
    ];
    return colors[index % colors.length];
  }

  changeMonth(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      this.month = target.value;
      this.loadDashboard();
    }
  }
}
