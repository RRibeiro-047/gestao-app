import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faChartPie, faTags, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  title = 'Gestão de Custos';
  currentYear: number = new Date().getFullYear();
  isMobileMenuOpen = false;
  
  // Ícones
  faBars = faBars;
  faChartPie = faChartPie;
  faTags = faTags;
  faReceipt = faReceipt;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  private checkScreenSize() {
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }
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