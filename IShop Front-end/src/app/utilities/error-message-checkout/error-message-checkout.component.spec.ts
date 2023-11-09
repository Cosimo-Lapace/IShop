import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageCheckoutComponent } from './error-message-checkout.component';

describe('ErrorMessageCheckoutComponent', () => {
  let component: ErrorMessageCheckoutComponent;
  let fixture: ComponentFixture<ErrorMessageCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessageCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
