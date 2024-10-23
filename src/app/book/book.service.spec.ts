/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { BookService } from './book.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Book', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService, provideHttpClientTesting(), provideHttpClient()]
    });
  });

  it('should ...', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));
});
