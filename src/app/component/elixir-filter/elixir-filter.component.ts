import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-elixir-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './elixir-filter.component.html',
  styleUrls: ['./elixir-filter.component.scss'],
})
export class ElixirFilterComponent {
  filters = {
    name: '',
    difficulty: '',
    ingredient: '',
    inventorFullName: '',
    manufacturer: '',
  };

  @Output() filtersUpdated = new EventEmitter<any>();

  applyFilters() {
    this.filtersUpdated.emit(this.filters);
  }

  resetFilters() {
    this.filters = {
      name: '',
      difficulty: '',
      ingredient: '',
      inventorFullName: '',
      manufacturer: '',
    };
    this.filtersUpdated.emit(this.filters);
  }
}
