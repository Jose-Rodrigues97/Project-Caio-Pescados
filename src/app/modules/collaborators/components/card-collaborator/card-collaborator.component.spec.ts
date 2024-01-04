import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollaboratorComponent } from './card-collaborator.component';

describe('CardCollaboratorComponent', () => {
  let component: CardCollaboratorComponent;
  let fixture: ComponentFixture<CardCollaboratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCollaboratorComponent]
    });
    fixture = TestBed.createComponent(CardCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
