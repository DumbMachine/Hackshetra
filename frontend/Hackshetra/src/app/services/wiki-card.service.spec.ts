import { TestBed } from '@angular/core/testing';

import { WikiCardService } from './wiki-card.service';

describe('WikiCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiCardService = TestBed.get(WikiCardService);
    expect(service).toBeTruthy();
  });
});
