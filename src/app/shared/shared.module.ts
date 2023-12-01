import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';
import { RenderComponent } from './component/cms/render/render.component';
import { FooterComponent } from './component/cms/footer/footer.component';
import { FooterItemComponent } from './component/cms/footer-item/footer-item.component';
import { FooterItemGroupComponent } from './component/cms/footer-item-group/footer-item-group.component';
import { CallToActionComponent } from './component/cms/call-to-action/call-to-action.component';
import { HeaderComponent } from './component/cms/header/header.component';
import { HeaderItemComponent } from './component/cms/header-item/header-item.component';
import { AppModule } from '../app.module';
import { HomePageComponent } from './component/cms/page/home-page/home-page.component';
import { NewsPageComponent } from './component/cms/page/news-page/news-page.component';
import { GenericComponent } from './component/cms/page/generic/generic.component';


@NgModule({
  declarations: [
    DynamicComponentDirective,
    FooterComponent,
    FooterItemGroupComponent,
    FooterItemComponent,
    CallToActionComponent,
    HeaderComponent,
    RenderComponent,
    HeaderItemComponent,
    HomePageComponent,
    NewsPageComponent,
    GenericComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class SharedModule { }
