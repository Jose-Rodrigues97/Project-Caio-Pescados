import { AfterViewChecked, Component, Input, Output } from '@angular/core';
import { PageableModel } from '../../models/pageable-model';
import { SortModel } from '../../models/sort-model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements AfterViewChecked {
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

  constructor() {
  }

  ngAfterViewChecked(): void {
    if (this.totalPages == 1) {
      var itemDisabled = document.getElementById('next');
      itemDisabled?.classList.add('disabled');
    }

    // var li = document.createElement('<li (click)="onChangePage($event)" class="page-item"><a class="page-link" style="color: black; cursor: pointer;" >4</a></li>');
    // var ul = document.getElementById('ul');
    // ul?.appendChild(li);
  }

  ngOnInit() {
  }

  onChangePage(event: Event) {
    const element = (<HTMLInputElement>event.target);
    var elementActive = document.getElementsByClassName('page-link active');

    if (element.children[0]?.classList.contains('disabled')) {
      return
    } else {
      if (elementActive[0] == element) {
        return
      } else {
        elementActive[0].classList.remove('active');
        element.classList.add('active');
      }
    }
  }
}
