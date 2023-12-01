import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent {
  data: any;

  constructor(@Inject('componentData') data: any) {
    this.data = data;
  }

  ngOnInit() {
  }
}