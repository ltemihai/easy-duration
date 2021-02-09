import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    DurationInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, DurationInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  public  ngDoBootstrap(): void {
    const element = createCustomElement(DurationInputComponent, { injector: this.injector });
    customElements.define('easy-duration', element);
  }
}
