import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogPlayerComponent } from './add-dialog-player.component';

describe('AddDialogPlayerComponent', () => {
  let component: AddDialogPlayerComponent;
  let fixture: ComponentFixture<AddDialogPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDialogPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDialogPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
