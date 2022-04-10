import {Component} from '@angular/core';

@Component({
  selector: 'app-badge',
  template: '<div>OneLab</div>',
  styles: ['div { position: absolute; right: 10px; bottom: 10px; background-color: #EEEEEE; width: 256px; height: 64px; text-align: center; padding: 10px; box-shadow: 2px 4px 6px gray; border: 1px solid #999999; border-radius: 10px; }']
})
export class BadgeComponent {
  constructor() {
  }
}
