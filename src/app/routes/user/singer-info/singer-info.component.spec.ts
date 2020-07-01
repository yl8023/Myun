import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerInfoComponent } from './singer-info.component';

describe('SingerInfoComponent', () => {
  let component: SingerInfoComponent;
  let fixture: ComponentFixture<SingerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
