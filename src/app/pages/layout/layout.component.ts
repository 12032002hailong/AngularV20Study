import { Component, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NzMenuModule } from 'ng-zorro-antd/menu';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  protected readonly date = new Date();
  constructor() {}

  ngOnInit() {}
}
