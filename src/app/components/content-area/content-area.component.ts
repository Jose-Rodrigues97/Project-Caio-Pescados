import { Component } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent {

  ngOnInit(): void {
    if (window.innerWidth > document.body.clientWidth) {
      document.getElementsByTagName('section')[0].style.width = 'calc(100vw - 250px - 15px)';
    }
  }
}

