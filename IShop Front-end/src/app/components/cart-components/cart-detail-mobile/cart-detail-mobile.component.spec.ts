import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailMobileComponent } from './cart-detail-mobile.component';

describe('CartDetailMobileComponent', () => {
  let component: CartDetailMobileComponent;
  let fixture: ComponentFixture<CartDetailMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
