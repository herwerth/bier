import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeizenComponent } from './weizen.component';

describe('WeizenComponent', () => {
  let component: WeizenComponent;
  let fixture: ComponentFixture<WeizenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeizenComponent]
    });
    fixture = TestBed.createComponent(WeizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
