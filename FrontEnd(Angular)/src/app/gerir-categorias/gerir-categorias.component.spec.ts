import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirCategoriasComponent } from './gerir-categorias.component';

describe('GerirCategoriasComponent', () => {
  let component: GerirCategoriasComponent;
  let fixture: ComponentFixture<GerirCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
