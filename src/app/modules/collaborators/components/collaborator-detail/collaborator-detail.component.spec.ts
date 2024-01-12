import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorDetailComponent } from './collaborator-detail.component';

describe('CollaboratorDetailComponent', () => {
  let component: CollaboratorDetailComponent;
  let fixture: ComponentFixture<CollaboratorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaboratorDetailComponent]
    });
    fixture = TestBed.createComponent(CollaboratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
