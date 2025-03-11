import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-elixir-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './elixir-list.component.html',
  styleUrl: './elixir-list.component.scss'
})
export class ElixirListComponent {
  @Input() elixirs!: Signal<any[]>;
}
