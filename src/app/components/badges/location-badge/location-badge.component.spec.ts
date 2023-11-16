import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationBadgeComponent } from './location-badge.component';

describe('LocationBadgeComponent', () => {
  let component: LocationBadgeComponent;
  let fixture: ComponentFixture<LocationBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationBadgeComponent]
    });
    fixture = TestBed.createComponent(LocationBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
