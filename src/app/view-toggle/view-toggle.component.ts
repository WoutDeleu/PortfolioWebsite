import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-toggle',
  templateUrl: './view-toggle.component.html',
  styleUrls: ['./view-toggle.component.css']
})
export class ViewToggleComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  @ViewChild('darkModeSwitch', { read: ElementRef }) element: ElementRef | undefined;

  checked = false;
  disabled = false;

  ngAfterViewInit() {
    this.setIcon();
  }
  // todo
  // site : https://stackoverflow.com/questions/62549139/it-is-possible-change-angular-material-mat-slide-toggle-icon
  setIcon() {
    if (this.element) {
      const targetSpan: HTMLElement = this.element.nativeElement.querySelector('.mat-slide-toggle-thumb');
      while (targetSpan.firstChild) {
        targetSpan.firstChild.remove();
      }
      const elem = this.renderer.createElement('mat-icon');
      const icon = this.checked ? 'dark_mode' : 'light_mode';
      elem.setAttribute('class', 'mat-icon notranslate material-icons mat-icon-no-color light-mode-switch-icon');
      elem.textContent = icon
      targetSpan.appendChild(elem);
    }
  }

  changeTheme() {
    this.checked = !this.checked;
    console.log('I am now ', this.checked);
    this.setIcon();
  }
}
