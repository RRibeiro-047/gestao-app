import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CostService } from '../../services/cost';
import { Center } from '../../app';

@Component({
  selector: 'app-centers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './centers.html',
  styleUrls: ['./centers.scss']
})
export class CentersComponent implements OnInit {
  centers: Center[] = [];
  newName = '';
  newDescription = '';

  loading = false;

  constructor(private svc: CostService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.svc.getCenters().subscribe(c => { this.centers = c; this.loading = false; }, () => this.loading = false);
  }

  add() {
    const name = this.newName.trim();
    if (!name) return alert('Digite o nome do centro.');
    this.svc.addCenter({ name, description: this.newDescription }).subscribe(() => {
      this.newName = ''; this.newDescription = ''; this.load();
    });
  }

  remove(id: string) {
    if (!confirm('Tem certeza que deseja excluir?')) return;
    this.svc.deleteCenter(id).subscribe(() => this.load());
  }
}
