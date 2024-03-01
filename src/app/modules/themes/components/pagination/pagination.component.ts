import { Component, Input, Output } from '@angular/core';
import { PaginationModel } from '../../models/pagination-model';
import { PageableModel } from '../../models/pageable-model';
import { SortModel } from '../../models/sort-model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() empty!: boolean;
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() number!: number;
  @Input() numberOfElements!: number;
  @Input() pageable!: PageableModel;
  @Input() size!: number;
  @Input() sort!: SortModel;
  @Input() totalElements!: number;
  @Input() totalPages!: number;

  ngOnInit() {
  }
}
