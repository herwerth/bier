import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BierFallComponent } from './bier-fall.component';

describe('BierFallComponent', () => {
  let component: BierFallComponent;
  let fixture: ComponentFixture<BierFallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BierFallComponent]
    });
    fixture = TestBed.createComponent(BierFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
