import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMusicComponent } from './local-music.component';

describe('LocalMusicComponent', () => {
  let component: LocalMusicComponent;
  let fixture: ComponentFixture<LocalMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
