import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerSpinnerComponent } from './roller-spinner.component';

describe('RollerSpinnerComponent', () => {
  let component: RollerSpinnerComponent;
  let fixture: ComponentFixture<RollerSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollerSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RollerSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
