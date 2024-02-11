import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourglassSpinnerComponent } from './hourglass-spinner.component';

describe('HourglassSpinnerComponent', () => {
  let component: HourglassSpinnerComponent;
  let fixture: ComponentFixture<HourglassSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourglassSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourglassSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
