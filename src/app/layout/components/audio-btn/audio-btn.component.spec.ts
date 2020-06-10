import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBtnComponent } from './audio-btn.component';

describe('AudioBtnComponent', () => {
  let component: AudioBtnComponent;
  let fixture: ComponentFixture<AudioBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
