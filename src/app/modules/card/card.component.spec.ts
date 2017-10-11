import { getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from 'chai';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
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
