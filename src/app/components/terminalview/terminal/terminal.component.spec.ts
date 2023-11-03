import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalviewComponent } from './terminal.component';

describe('TerminalViewComponent', () => {
  let component: TerminalviewComponent;
  let fixture: ComponentFixture<TerminalviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalviewComponent]
    });
    fixture = TestBed.createComponent(TerminalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
