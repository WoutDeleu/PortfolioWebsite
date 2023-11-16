import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeBadgeComponent } from './age-badge.component';

describe('AgeBadgeComponent', () => {
  let component: AgeBadgeComponent;
  let fixture: ComponentFixture<AgeBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeBadgeComponent]
    });
    fixture = TestBed.createComponent(AgeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
