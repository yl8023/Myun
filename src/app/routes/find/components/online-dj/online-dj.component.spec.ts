import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDjComponent } from './online-dj.component';

describe('OnlineDjComponent', () => {
  let component: OnlineDjComponent;
  let fixture: ComponentFixture<OnlineDjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
