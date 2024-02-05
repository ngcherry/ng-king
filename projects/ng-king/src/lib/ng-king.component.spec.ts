import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKingComponent } from './ng-king.component';

describe('NgKingComponent', () => {
  let component: NgKingComponent;
  let fixture: ComponentFixture<NgKingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgKingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
