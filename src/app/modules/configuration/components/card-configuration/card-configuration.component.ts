import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-configuration',
  templateUrl: './card-configuration.component.html',
  styleUrls: ['./card-configuration.component.css']
})
export class CardConfigurationComponent {
  @Input() userId!: number;
  @Input() link!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
}
