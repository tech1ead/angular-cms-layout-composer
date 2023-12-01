import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { layoutMap } from 'src/app/model/mapping/layout-map';
import { ContentfulService } from 'src/app/core/service/contentful.service';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit {
  pageContent$ = new BehaviorSubject<any>(null);
  layoutMap: { [key: string]: Type<any> } = layoutMap;
  layoutComponentType: Type<any> | null = null;

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private injector: Injector,
    private router: Router
  ) { }

  ngOnInit() {
    const url = this.route.snapshot.url.join('/');
    if (url === '') {  
      this.contentfulService.getPage('home').subscribe(
        pageContent => this.handlePageContent(pageContent),
        error => console.error('Error retrieving home page content:', error)
      );
    } else { 
      this.contentfulService.getPage(url).subscribe(
        pageContent => this.handlePageContent(pageContent),
        error => this.router.navigate(['/404'])
      );
    }
  }

  handlePageContent(pageContent: any) {
    this.pageContent$.next(pageContent.fields);
    const layoutType = String(pageContent.fields?.['layoutType']) || null;
    this.layoutComponentType = this.layoutMap[layoutType!] || null;
  }

  componentInjector(pageContent: any): Injector {
    return Injector.create({
      providers: [{ provide: 'pageContent', useValue: pageContent }],
      parent: this.injector
    });
  }
}