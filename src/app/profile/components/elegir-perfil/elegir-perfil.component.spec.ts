import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirPerfilComponent } from './elegir-perfil.component';

describe('ElegirPerfilComponent', () => {
  let component: ElegirPerfilComponent;
  let fixture: ComponentFixture<ElegirPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
