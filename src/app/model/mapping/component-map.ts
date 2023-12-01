import { Type } from "@angular/core";
import { CallToActionComponent } from "src/app/shared/component/cms/call-to-action/call-to-action.component";
import { FooterItemGroupComponent } from "src/app/shared/component/cms/footer-item-group/footer-item-group.component";
import { FooterItemComponent } from "src/app/shared/component/cms/footer-item/footer-item.component";
import { FooterComponent } from "src/app/shared/component/cms/footer/footer.component";
import { HeaderItemComponent } from "src/app/shared/component/cms/header-item/header-item.component";
import { HeaderComponent } from "src/app/shared/component/cms/header/header.component";

export const componentMap: { [key: string]: Type<any> } = {
    'header': HeaderComponent,
    'headerItem': HeaderItemComponent,
    'callToAction': CallToActionComponent,
    'footer': FooterComponent,
    'footerGroup': FooterItemGroupComponent,
    'footerItem': FooterItemComponent
  };