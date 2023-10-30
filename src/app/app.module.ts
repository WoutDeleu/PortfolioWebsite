import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgOptimizedImage} from "@angular/common";
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { TerminalViewComponent } from './terminal-view/terminal-view.component';
import { OverViewComponent } from './over-view/over-view.component';
import {FormsModule} from "@angular/forms";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
    declarations: [
        AppComponent,
        ToggleSwitchComponent,
        TerminalViewComponent,
        OverViewComponent,
        NavigationBarComponent,
        UnderConstructionComponent,
        UnderConstructionComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
