import { Component, Input, Type, Injector, Inject } from '@angular/core';
import { componentMap } from 'src/app/model/mapping/component-map';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  pageContent: any;
  componentMap: { [key: string]: Type<any> } = componentMap;

  constructor(@Inject('pageContent') pageContent: any, private injector: Injector) {
    this.pageContent = pageContent;
  }

  ngOnInit() {
    console.log('pagecontent:'+this.pageContent);
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