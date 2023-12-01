import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent{
  component: any;
  constructor(@Inject('componentData') private componentData: any) {
    this.component = componentData;
  }

}
