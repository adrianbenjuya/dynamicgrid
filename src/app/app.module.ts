import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material';
import { CheckComponent } from './check/check.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    RadioComponent,
    InputComponent
  ],
  entryComponents: [
    CheckComponent,
    RadioComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GridsterModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
