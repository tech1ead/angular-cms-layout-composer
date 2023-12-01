import { Component, Inject } from '@angular/core';
import { ComponentMappingService } from 'src/app/core/service/component-mapping.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  component: any;
  constructor(
    @Inject('componentData') private componentData: any,
    public mappingService: ComponentMappingService
  ) {
    this.component = componentData;
  }
}