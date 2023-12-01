import { Component, Input, Type, Injector, OnInit, Inject } from '@angular/core';
import { componentMap } from 'src/app/model/mapping/component-map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  pageContent: any;
  componentMap: { [key: string]: Type<any> } = componentMap;

  constructor(@Inject('pageContent') pageContent: any, private injector: Injector) {
    this.pageContent = pageContent;
  }

  ngOnInit() {
  }

  getComponentType(name: string): Type<any> | null {
    const componentType = this.componentMap[name];
    return componentType || null;
  }

  componentInjector(componentFields: any): Injector {
    return Injector.create({
      providers: [{ provide: 'componentData', useValue: componentFields }],
      parent: this.injector
    });
  }
}