import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSectionComponent } from './hero-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroSectionComponent],
  exports: [HeroSectionComponent],
})
export class RbxHeroSectionModule { }
