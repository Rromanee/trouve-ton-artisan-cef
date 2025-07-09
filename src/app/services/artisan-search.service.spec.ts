import { TestBed } from '@angular/core/testing';

import { ArtisanSearchService } from './artisan-search.service';

describe('ArtisanSearchService', () => {
  let service: ArtisanSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtisanSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
