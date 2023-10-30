import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToProductListComponent } from './back-to-product-list.component';

describe('BackToProductListComponent', () => {
  let component: BackToProductListComponent;
  let fixture: ComponentFixture<BackToProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
