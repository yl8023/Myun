import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSliderComponent } from './audio-slider.component';

describe('AudioSliderComponent', () => {
  let component: AudioSliderComponent;
  let fixture: ComponentFixture<AudioSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
