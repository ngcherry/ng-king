import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinSpinnerComponent } from './spin-spinner.component';

describe('SpinSpinnerComponent', () => {
  let component: SpinSpinnerComponent;
  let fixture: ComponentFixture<SpinSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
