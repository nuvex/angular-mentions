import { Component } from '@angular/core';

import { COMMON_NAMES } from '../common-names';
import {MentionDirective} from 'angular-mentions';

@Component({
  selector: 'app-test-position',
  templateUrl: './test-position.component.html',
  standalone: true,
  imports: [MentionDirective]
})
export class TestPositionComponent {
  items: string[] = COMMON_NAMES;
  scrollValues(e: HTMLElement) {
    return `
      scrollLeft=${e.scrollLeft}; scrollWidth=${e.scrollWidth}
      scrollTop=${e.scrollTop}; scrollHeight=${e.scrollHeight}
    `;
  }
}
