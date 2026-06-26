import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisComponent } from './detalle-pais';

describe('DetallePais', () => {
  let component: DetallePaisComponent;
  let fixture: ComponentFixture<DetallePaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePaisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePaisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
