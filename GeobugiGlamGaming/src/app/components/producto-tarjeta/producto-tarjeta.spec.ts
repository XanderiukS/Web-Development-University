import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTarjeta } from './producto-tarjeta';

describe('ProductoTarjeta', () => {
  let component: ProductoTarjeta;
  let fixture: ComponentFixture<ProductoTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoTarjeta],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
