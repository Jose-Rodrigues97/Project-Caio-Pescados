import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPurchaseComponent } from './purchase-list.component';



describe('PurchaseComponent', () => {
  let component: ListPurchaseComponent;
  let fixture: ComponentFixture<ListPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPurchaseComponent]
    });
    fixture = TestBed.createComponent(ListPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



