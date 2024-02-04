import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfigurationComponent } from './card-configuration.component';

describe('CardConfigurationComponent', () => {
  let component: CardConfigurationComponent;
  let fixture: ComponentFixture<CardConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardConfigurationComponent]
    });
    fixture = TestBed.createComponent(CardConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
