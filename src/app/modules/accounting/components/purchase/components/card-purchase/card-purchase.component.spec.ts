import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPurchaseComponent } from './card-purchase.component';

describe('CardPurchaseComponent', () => {
  let component: CardPurchaseComponent;
  let fixture: ComponentFixture<CardPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPurchaseComponent]
    });
    fixture = TestBed.createComponent(CardPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
