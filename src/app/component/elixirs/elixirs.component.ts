import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElixirFilterComponent } from '../elixir-filter/elixir-filter.component';
import { ElixirListComponent } from '../elixir-list/elixir-list.component';
import { ElixirsService } from '../../services/elixirs.service';

@Component({
  selector: 'app-elixirs',
  imports: [CommonModule, ElixirFilterComponent, ElixirListComponent],
  templateUrl: './elixirs.component.html',
  styleUrls: ['./elixirs.component.scss'],
})
export class ElixirsComponent implements OnInit {
  filters = {
    name: '',
    difficulty: '',
    ingredient: '',
    inventorFullName: '',
    manufacturer: '',
  };

  elixirs: Signal<any[]>;
  isLoading: Signal<boolean>;
  error: Signal<string | null>;

  constructor(private elixirsService: ElixirsService) {
    this.elixirs = this.elixirsService.elixirsSignal();
    this.isLoading = this.elixirsService.loadingSignal();
    this.error = this.elixirsService.errorSignal();
  }

  ngOnInit() {
    this.fetchElixirs();
  }

  fetchElixirs() {
    this.elixirsService.getElixirs(this.filters);
  }

  updateFilters(filters: any) {
    this.filters = filters;
    this.fetchElixirs();
  }
}
