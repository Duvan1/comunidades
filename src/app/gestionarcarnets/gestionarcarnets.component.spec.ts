import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarcarnetsComponent } from './gestionarcarnets.component';

describe('GestionarcarnetsComponent', () => {
  let component: GestionarcarnetsComponent;
  let fixture: ComponentFixture<GestionarcarnetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarcarnetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarcarnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
