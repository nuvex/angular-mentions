import { Component } from '@angular/core';

import { COMMON_NAMES } from './common-names';
import {MentionDirective} from 'angular-mentions';
import {NgIf} from "@angular/common";
import {DemoAsyncComponent} from "./demo-async/demo-async.component";
import {DemoConfigComponent} from "./demo-config/demo-config.component";
import {DemoEventsComponent} from "./demo-events/demo-events.component";
import {DemoOptionsComponent} from "./demo-options/demo-options.component";
import {DemoTemplateComponent} from "./demo-template/demo-template.component";
import {TestPositionComponent} from "./test-position/test-position.component";
import {DemoTinymceComponent} from "./demo-tinymce/demo-tinymce.component";

/**
 * Demo app showing usage of the mentions directive.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MentionDirective, NgIf, DemoAsyncComponent, DemoConfigComponent, DemoEventsComponent, DemoOptionsComponent, DemoTemplateComponent, TestPositionComponent, DemoTinymceComponent]
})
export class AppComponent {
  items: string[] = COMMON_NAMES;
  test = this.getPath();
  private getPath() {
    // the path provides direct access to the tests for e2e testing
    switch (window.location.pathname) {
      case '/config'   : return 'config';
      case '/events'   : return 'events';
      case '/async'    : return 'async';
      case '/options'  : return 'options';
      case '/templates': return 'templates';
      case '/pos'      : return 'pos';
      default          : return null;
    }
  }
}
