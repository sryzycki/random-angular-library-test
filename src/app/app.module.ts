import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RbxHeroSectionModule } from './modules/hero-section/hero-section.module';
import { RbxCardModule } from './modules/card/card.module';
import { RbxButtonModule } from './modules/button/button.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RbxHeroSectionModule,
    RbxCardModule,
    RbxButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
