import { Component, Inject } from '@angular/core';
import { ComponentMappingService } from 'src/app/core/service/component-mapping.service';

@Component({
  selector: 'app-footer-item-group',
  templateUrl: './footer-item-group.component.html',
  styleUrls: ['./footer-item-group.component.scss']
})
export class FooterItemGroupComponent {
  component: any;
  constructor(
    @Inject('componentData') private componentData: any,
    public mappingService: ComponentMappingService
  ) {
    this.component = componentData;
  }
}
