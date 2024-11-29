import { Component } from '@angular/core';
import { MentionDirective } from 'angular-mentions';

// import { COMMON_NAMES } from '../common-names';

@Component({
  selector: 'app-demo-template',
  standalone: true,
  imports: [MentionDirective],
  templateUrl: './demo-template.component.html'
})
export class DemoTemplateComponent {
  items: any[] =  [
    {
      username: 'noah',
      name: 'Noah',
      img: '42143138'
    },
    {
      username: 'liam',
      name: 'Liam',
      img: '42143139'
    },
    {
      username: 'mason',
      name: 'Mason',
      img: '42143140'
    },
    {
      username: 'jacob',
      name: 'Jacob',
      img: '42143141'
    }
  ];
}
