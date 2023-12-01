import { Component, Inject } from '@angular/core';
import { ComponentMappingService } from 'src/app/core/service/component-mapping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    @Inject('componentData') public component: any,
    public mappingService: ComponentMappingService,
  ) { }

}