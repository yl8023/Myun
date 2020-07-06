import { TestBed } from '@angular/core/testing';

import { MvViewService } from './mv-view.service';

describe('MvViewService', () => {
  let service: MvViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
