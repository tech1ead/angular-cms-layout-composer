import { Component, Injector, Input, Type, OnInit, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-render',
  template: `
    <ng-container *ngIf="componentType">
      <ng-container 
        [ngComponentOutlet]="componentType"
        [ngComponentOutletInjector]="componentInjector">
      </ng-container>
    </ng-container>
  `,
})
export class RenderComponent implements OnInit {
  @Input() componentType!: Type<any> | null; 
  @Input() componentInjector!: Injector;

  private compRef!: ComponentRef<any>;

  ngOnInit() {
    if (this.componentInjector) {
      const inputProvider = {provide: 'component', useValue: this.componentInjector};
      this.componentInjector = Injector.create({providers: [inputProvider], parent: this.componentInjector});
    }
  }
}