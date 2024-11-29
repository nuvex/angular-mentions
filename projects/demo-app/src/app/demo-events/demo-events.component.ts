import { Component } from '@angular/core';
import { COMMON_NAMES } from '../common-names';
import {MentionConfig, MentionDirective} from 'angular-mentions';

@Component({
  selector: 'app-demo-events',
  imports: [MentionDirective],
  standalone: true,
  templateUrl: './demo-events.component.html'
})
export class DemoEventsComponent {
  mentionConfig: MentionConfig = {returnTrigger:false};
  output = '';
  complexItems: any[] = COMMON_NAMES.map(name => {
    return {label: name};
  });
  constructor() {
    this.log('Ready...');
  }
  log(s:string, e?:any) {
    this.output = new Date().toISOString() + ' ' +
      s + (e ? ' ' + JSON.stringify(e) : '') + '\n' + this.output;
  }
  updateConfig(e) {
    this.mentionConfig = {returnTrigger:e.target.checked};
  }
}
