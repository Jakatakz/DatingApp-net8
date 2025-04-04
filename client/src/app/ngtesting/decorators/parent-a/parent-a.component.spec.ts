import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAComponent } from './parent-a.component';

describe('ParentAComponent', () => {
  let component: ParentAComponent;
  let fixture: ComponentFixture<ParentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
