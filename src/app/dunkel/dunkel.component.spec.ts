import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunkelComponent } from './dunkel.component';

describe('DunkelComponent', () => {
  let component: DunkelComponent;
  let fixture: ComponentFixture<DunkelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DunkelComponent]
    });
    fixture = TestBed.createComponent(DunkelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
