import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppinerComponent } from './sppiner.component';

describe('SppinerComponent', () => {
  let component: SppinerComponent;
  let fixture: ComponentFixture<SppinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SppinerComponent]
    });
    fixture = TestBed.createComponent(SppinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
