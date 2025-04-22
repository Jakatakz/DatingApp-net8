import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDateComponent } from './display-date.component';

describe('DisplayDateComponent', () => {
  let component: DisplayDateComponent;
  let fixture: ComponentFixture<DisplayDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
