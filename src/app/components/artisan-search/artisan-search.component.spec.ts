import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanSearchComponent } from './artisan-search.component';

describe('ArtisanSearchComponent', () => {
  let component: ArtisanSearchComponent;
  let fixture: ComponentFixture<ArtisanSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
