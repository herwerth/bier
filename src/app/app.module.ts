import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BierFallComponent } from './bier-fall/bier-fall.component';
import { weizenComponent } from './weizen/weizen.component';
import { dunkelComponent } from './dunkel/dunkel.component';
import { hellComponent } from './hell/hell.component';


@NgModule({
  declarations: [AppComponent, BierFallComponent, weizenComponent, hellComponent, dunkelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
