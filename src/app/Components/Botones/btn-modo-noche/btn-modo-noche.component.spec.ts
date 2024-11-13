import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnModoNocheComponent } from './btn-modo-noche.component';

describe('BtnModoNocheComponent', () => {
  let component: BtnModoNocheComponent;
  let fixture: ComponentFixture<BtnModoNocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnModoNocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnModoNocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
