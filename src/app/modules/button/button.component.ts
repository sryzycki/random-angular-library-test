import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button
      class="pretty-button"
      (click)="clicked.emit('Ive been so clicked!')"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent implements OnInit {
  /**
   * Emits a string when the button is clicked.
   */
  @Output()
  public clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
}
