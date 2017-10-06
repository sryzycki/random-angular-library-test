import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'rbx-hero-section',
  styleUrls: ['./hero-section.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class HeroSectionComponent {
  /**
   * Optional image URL to be used to create a background image.
   */
  @Input()
  public image: string;

  /**
   * Always apply the base css class to ease theming.
   */
  @HostBinding('class.rbx-hero-section')
  private addBaseCssClass = true;
}
