import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirSubcategoriasComponent } from './gerir-subcategorias.component';

describe('GerirSubcategoriasComponent', () => {
  let component: GerirSubcategoriasComponent;
  let fixture: ComponentFixture<GerirSubcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirSubcategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
