import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RbxButtonModule } from './modules/button/button.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RbxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
