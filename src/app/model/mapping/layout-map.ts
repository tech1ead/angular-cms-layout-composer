import { Type } from '@angular/core';
import { HomePageComponent } from 'src/app/shared/component/cms/page/home-page/home-page.component';
import { NewsPageComponent } from 'src/app/shared/component/cms/page/news-page/news-page.component';

export const layoutMap: { [key: string]: Type<any> } = {
    'NewsPage': NewsPageComponent,
    'HomePage': HomePageComponent,
};
