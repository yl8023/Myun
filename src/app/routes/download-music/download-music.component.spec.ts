import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMusicComponent } from './download-music.component';

describe('DownloadMusicComponent', () => {
  let component: DownloadMusicComponent;
  let fixture: ComponentFixture<DownloadMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
