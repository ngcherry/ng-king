import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSpinnerComponent } from './facebook-spinner.component';

describe('FacebookSpinnerComponent', () => {
  let component: FacebookSpinnerComponent;
  let fixture: ComponentFixture<FacebookSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacebookSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
