import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisSpinnerComponent } from './ellipsis-spinner.component';

describe('EllipsisSpinnerComponent', () => {
  let component: EllipsisSpinnerComponent;
  let fixture: ComponentFixture<EllipsisSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllipsisSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EllipsisSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
