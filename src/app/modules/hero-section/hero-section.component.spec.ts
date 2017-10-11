import { getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from 'chai';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should create component', () => {
    expect(component).to.not.be.undefined;
  });
});
