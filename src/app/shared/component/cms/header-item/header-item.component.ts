import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {
  data: any;

  constructor(@Inject('componentData') data: any) {
    this.data = data;
  }

  ngOnInit() {
  }
}