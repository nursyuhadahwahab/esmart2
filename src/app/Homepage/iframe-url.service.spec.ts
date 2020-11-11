import { TestBed } from '@angular/core/testing';

import { IframeUrlService } from './iframe-url.service';

describe('IframeUrlService', () => {
  let service: IframeUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframeUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
