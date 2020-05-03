import { TestBed } from '@angular/core/testing';

import { CanActivateAddNewsGuard } from './can-activate-add-news.guard';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('CanActivateAddNewsGuard', () => {
  let guard: CanActivateAddNewsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
      ]
    });
    guard = TestBed.inject(CanActivateAddNewsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
