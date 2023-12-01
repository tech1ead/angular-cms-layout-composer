import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnDestroy, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { componentMap } from 'src/app/model/mapping/component-map';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective implements OnDestroy, OnChanges {
  private componentRef!: ComponentRef<unknown>;
  private onDestroy$ = new Subject<void>();
  private componentMap = componentMap;

  @Input('appDynamicComponent') componentName!: string;
  @Input('appDynamicComponentContext') context: any;
  @Input('appDynamicComponentType') componentType!: Type<unknown>;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges() {
    this.createDynamicComponent();
  }

  createDynamicComponent() {
    this.viewContainerRef.clear();
  
    const componentType = this.componentMap[this.componentName];
    if (componentType) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.viewContainerRef.createComponent(componentFactory);
  
      if (this.componentRef && this.context) {
        (this.componentRef.instance as any).component = this.context;
      }
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}