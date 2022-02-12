import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanosTarjetaComponent } from './villanos-tarjeta.component';

describe('VillanosTarjetaComponent', () => {
  let component: VillanosTarjetaComponent;
  let fixture: ComponentFixture<VillanosTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillanosTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanosTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
