import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarusuariosComponent } from './gestionarusuarios.component';

describe('GestionarusuariosComponent', () => {
  let component: GestionarusuariosComponent;
  let fixture: ComponentFixture<GestionarusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
