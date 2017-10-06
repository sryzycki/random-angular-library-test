import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RbxCardModule } from './modules/card/card.module';
import { RbxButtonModule } from './modules/button/button.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RbxCardModule,
    RbxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
