import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirDespesasComponent } from './gerir-despesas.component';

describe('GerirDespesasComponent', () => {
  let component: GerirDespesasComponent;
  let fixture: ComponentFixture<GerirDespesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirDespesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
