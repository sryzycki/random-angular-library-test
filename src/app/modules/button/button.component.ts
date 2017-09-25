import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

/**
 * Possible button importance levels.
 */
export type ButtonImportanceLevel = 'primary' | undefined;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:component-selector
  selector: 'button[rbxButton]',
  styleUrls: ['./button.component.scss'],
  template: `
    <ng-content></ng-content>
  `
})
export class ButtonComponent implements OnInit {
  /**
   * Always apply the base Rubix button css class.
   */
  @HostBinding('class.rbx-button')
  private addBaseButtonCssClass = true;

  /**
   * Bind to the host "secondary" CSS class.
   */
  @HostBinding('class.secondary')
  public styleAsSecondaryButton: boolean;

  /**
   * Bind to the host "primary" CSS class.
   */
  @HostBinding('class.primary')
  public styleAsPrimaryButton: boolean;

  /**
   * Button importance level in terms of primary/secondary/etc.
   */
  @Input()
  public rbxImportance: ButtonImportanceLevel;

  ngOnInit() {
    this.styleElementByImportanceLevel();
  }

  /**
   * Set component's properties bound to
   * the host element CSS classes.
   */
  private styleElementByImportanceLevel() {
    if ('primary' === this.rbxImportance) {
      this.styleAsPrimaryButton = true;
    }
    else {
      this.styleAsSecondaryButton = true;
    }
  }
}
