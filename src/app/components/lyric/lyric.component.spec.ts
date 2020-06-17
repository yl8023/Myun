import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricComponent } from './lyric.component';

describe('LyricComponent', () => {
  let component: LyricComponent;
  let fixture: ComponentFixture<LyricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
