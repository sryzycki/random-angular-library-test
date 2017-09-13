import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <button class="pretty-butto">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
