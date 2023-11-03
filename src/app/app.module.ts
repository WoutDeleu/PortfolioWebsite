import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgOptimizedImage} from "@angular/common";
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { TerminalviewComponent } from './components/terminalview/terminal/terminal.component';
import {FormsModule} from "@angular/forms";
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { OverviewComponent } from './components/overview/overview/overview.component';
import {DownloadCVButtonComponent} from "./components/download-cv-button/download-cv-button.component";

@NgModule({
    declarations: [
        AppComponent,
        ToggleSwitchComponent,
        TerminalviewComponent,
        OverviewComponent,
        NavigationBarComponent,
        UnderConstructionComponent,
        UnderConstructionComponent,
        OverviewComponent,
        TerminalviewComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    NgOptimizedImage,
    FormsModule,
    DownloadCVButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
