import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

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
  let primaryButtonElem: HTMLButtonElement;
  let secondaryButtonElem: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostComponent, ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    primaryButtonElem = element.query(By.css('.js-primary')).nativeElement;
    secondaryButtonElem = element.query(By.css('.js-secondary')).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('always has the "rbx-button" CSS class', () => {
    expect(primaryButtonElem.classList).toContain('rbx-button');
    expect(secondaryButtonElem.classList).toContain('rbx-button');
  });

  it('has the "primary" CSS class when "rbxImportance" input is set to "primary"', () => {
    expect(primaryButtonElem.classList).toContain('primary');
  });

  it('has the "secondary" CSS class when "rbxImportance" input is not provided', () => {
    expect(secondaryButtonElem.classList).toContain('secondary');
  });
});
