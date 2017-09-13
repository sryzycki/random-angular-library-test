import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button
      class="pretty-button"
      (click)="clicked.emit('Ive been so clicked!')"
    >
      {{ text }}
    </button>
  `
})
export class ButtonComponent implements OnInit {
  /**
   * Text to render inside of the button.
   */
  @Input()
  public text: string;

  /**
   * Emits a string when the button is clicked.
   */
  @Output()
  public clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
}
