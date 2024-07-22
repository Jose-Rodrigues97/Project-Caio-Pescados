import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ngOnInit() {

  }

  onShowAccordion(event: any) {
    console.log(event.target.parentElement.nextSibling.classList[2] == 'collapsing')
    console.log(event.target.parentElement.nextSibling.classList)
    event.target.parentElement.nextSibling.classList.remove('show')
  }
}