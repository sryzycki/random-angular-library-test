import { getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { expect } from 'chai';

import { ButtonComponent } from './button.component';

@Component({
  selector: 'rbx-host',
  template: `
    <div>
      <button class="js-primary" rbx-button rbx-importance="primary">Button</button>
      <button class="js-secondary" rbx-button>Button</button>
    </div>
  `,
})
class HostComponent { }

describe('ButtonComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let element: DebugElement;
  let el_primary: HTMLButtonElement;
  let el_secondary: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HostComponent, ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;

    fixture.detectChanges();
    await fixture.whenStable();

    el_primary = fixture.debugElement.query(By.css('.js-primary')).nativeElement;
    el_secondary = fixture.debugElement.query(By.css('.js-secondary')).nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should create component', () => {
    expect(component).to.not.be.undefined;
  });

  it('always has the "rbx-button" CSS class', () => {
    expect(el_primary.classList.contains('rbx-button')).to.be.true;
    expect(el_secondary.classList.contains('rbx-button')).to.be.true;
  });

  it('has the "primary" CSS class when "rbxImportance" input is set to "primary"', () => {
    expect(el_primary.classList.contains('rbx-button--primary')).to.be.true;
  });

  it('has the "secondary" CSS class when "rbxImportance" input is not provided', () => {
    expect(el_secondary.classList.contains('rbx-button--secondary')).to.be.true;
  });
});
