import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() count!: number;
  @Input() limit!: number;
  @Input() total!: number;
  @Output() page!: number;
  activePrevious!: boolean;
  activeNext!: boolean;
}
