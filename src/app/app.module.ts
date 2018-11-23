import { element } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';


import { RankComponent } from './rank/rank.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    RankComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [RankComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const component = createCustomElement(RankComponent, {injector});
    customElements.define('mt-rank', component);
  }
  ngDoBootstrap() {}

}
