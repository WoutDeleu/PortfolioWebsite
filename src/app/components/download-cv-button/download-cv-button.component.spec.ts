import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCVButtonComponent } from './download-cv-button.component';

describe('DownloadCVButtonComponent', () => {
  let component: DownloadCVButtonComponent;
  let fixture: ComponentFixture<DownloadCVButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadCVButtonComponent]
    });
    fixture = TestBed.createComponent(DownloadCVButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
