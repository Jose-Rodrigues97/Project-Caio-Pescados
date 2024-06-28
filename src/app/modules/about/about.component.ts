import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  menuId: string = '9'
  ngOnInit(){

  }

  onShowAccordion(event: any) {
    console.log(event.target.parentElement.nextSibling.classList[2] == 'collapsing')
    console.log(event.target.parentElement.nextSibling.classList)
    event.target.parentElement.nextSibling.classList.remove('show')
  }
}
