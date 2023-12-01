import { Injectable, Injector } from '@angular/core';
import { layoutMap } from 'src/app/model/mapping/layout-map';

@Injectable({
  providedIn: 'root'
})
export class LayoutMappingService{

  getComponentType(item: any) {
    const componentType = layoutMap[item.sys.contentType.sys.id];
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