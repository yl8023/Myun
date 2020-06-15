import { TestBed } from '@angular/core/testing';

import { MusicInfoStuService } from './music-info-stu.service';

describe('MusicInfoStuService', () => {
  let service: MusicInfoStuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicInfoStuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
