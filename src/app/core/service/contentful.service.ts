import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: 'your_space',
    accessToken: 'your_access_token'
  });

  constructor() { }

  getPage(url: string): Observable<Entry<any>> {
    return from(this.client.getEntries({ 
      content_type: 'page',
      'fields.url': url,
      include: 10
    })).pipe(
      map((entries:any) => {
        if (entries && entries.items && entries.items.length > 0) {
          return entries.items[0];
        } else {
          throw new Error('Page not found');
        }
      })
    );
  }
}