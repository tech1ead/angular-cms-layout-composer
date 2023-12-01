import { Injectable, Injector } from '@angular/core';
import { componentMap } from 'src/app/model/mapping/component-map';

@Injectable({
  providedIn: 'root'
})
export class ComponentMappingService {

  getComponentType(item: any) {
    const componentType = componentMap[item.sys.contentType.sys.id];
    if (!componentType) {
      throw new Error(`No component mapped for type ${item.sys.contentType.sys.id}`);
    }
    return componentType;
  }

  getComponentInjector(item: any) {
    return Injector.create({
      providers: [
        { provide: 'componentData', useValue: item },
      ],
    });
  }
}