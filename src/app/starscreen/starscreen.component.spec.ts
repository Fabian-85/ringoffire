import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarscreenComponent } from './starscreen.component';

describe('StarscreenComponent', () => {
  let component: StarscreenComponent;
  let fixture: ComponentFixture<StarscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
