import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookLiveComponent } from './look-live.component';

describe('LookLiveComponent', () => {
  let component: LookLiveComponent;
  let fixture: ComponentFixture<LookLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
