import { TestBed } from '@angular/core/testing';

import { NgxSideTemplateService } from './ngx-side-template.service';

describe('NgxSideTemplateService', () => {
  let service: NgxSideTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSideTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
