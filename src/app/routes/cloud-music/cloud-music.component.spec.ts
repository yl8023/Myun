import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMusicComponent } from './cloud-music.component';

describe('CloudMusicComponent', () => {
  let component: CloudMusicComponent;
  let fixture: ComponentFixture<CloudMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
