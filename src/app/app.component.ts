import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// vendor
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// myrmidon
import { EnvService, RamStorageService } from '@myrmidon/ngx-tools';
import {
  User,
  AuthJwtService,
  GravatarService,
  GravatarPipe,
} from '@myrmidon/auth-jwt-login';

// bricks
import { ASSERTED_COMPOSITE_ID_CONFIGS_KEY } from '@myrmidon/cadmus-refs-asserted-ids';
import { ViafRefLookupService } from '@myrmidon/cadmus-refs-viaf-lookup';
import { DbpediaRefLookupService } from '@myrmidon/cadmus-refs-dbpedia-lookup';
import { GeoNamesRefLookupService } from '@myrmidon/cadmus-refs-geonames-lookup';

// cadmus
import {
  CadmusCoreModule,
  Thesaurus,
  ThesaurusEntry,
} from '@myrmidon/cadmus-core';
import { CadmusGraphPgModule } from '@myrmidon/cadmus-graph-pg';
import { CadmusGraphUiModule } from '@myrmidon/cadmus-graph-ui';
import { CadmusProfileCoreModule } from '@myrmidon/cadmus-profile-core';
import { AppRepository, CadmusStateModule } from '@myrmidon/cadmus-state';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { CadmusUiPgModule } from '@myrmidon/cadmus-ui-pg';
import { CadmusItemEditorModule } from '@myrmidon/cadmus-item-editor';
import { CadmusItemListModule } from '@myrmidon/cadmus-item-list';
import { CadmusItemSearchModule } from '@myrmidon/cadmus-item-search';
import { CadmusThesaurusEditorModule } from '@myrmidon/cadmus-thesaurus-editor';
import { CadmusThesaurusListModule } from '@myrmidon/cadmus-thesaurus-list';
import { CadmusThesaurusUiModule } from '@myrmidon/cadmus-thesaurus-ui';
import { RefLookupConfig } from '@myrmidon/cadmus-refs-lookup';
import {
  GeoJsonFeature,
  WhgRefLookupService,
} from '@myrmidon/cadmus-refs-whg-lookup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    LeafletModule,
    // myrmidon
    GravatarPipe,
    // Cadmus
    CadmusCoreModule,
    CadmusProfileCoreModule,
    CadmusStateModule,
    CadmusUiModule,
    CadmusUiPgModule,
    CadmusGraphPgModule,
    CadmusGraphUiModule,
    CadmusItemEditorModule,
    CadmusItemListModule,
    CadmusItemSearchModule,
    CadmusThesaurusEditorModule,
    CadmusThesaurusListModule,
    CadmusThesaurusUiModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private _subs: Subscription[];

  public user?: User;
  public logged?: boolean;
  public itemBrowsers?: ThesaurusEntry[];
  public version: string;

  constructor(
    @Inject('itemBrowserKeys')
    private _itemBrowserKeys: { [key: string]: string },
    private _authService: AuthJwtService,
    private _gravatarService: GravatarService,
    private _appRepository: AppRepository,
    private _router: Router,
    env: EnvService,
    // lookup
    storage: RamStorageService,
    viaf: ViafRefLookupService,
    dbpedia: DbpediaRefLookupService,
    geonames: GeoNamesRefLookupService,
    whg: WhgRefLookupService
  ) {
    this.version = env.get('version') || '';
    this._subs = [];

    // configure external lookup for asserted composite IDs
    storage.store(ASSERTED_COMPOSITE_ID_CONFIGS_KEY, [
      {
        name: 'VIAF',
        iconUrl: '/img/viaf128.png',
        description: 'Virtual International Authority File',
        label: 'ID',
        service: viaf,
        itemIdGetter: (item: any) => item?.viafid,
        itemLabelGetter: (item: any) => item?.term,
      },
      {
        name: 'DBpedia',
        iconUrl: '/img/dbpedia128.png',
        description: 'DBpedia',
        label: 'ID',
        service: dbpedia,
        itemIdGetter: (item: any) => item?.uri,
        itemLabelGetter: (item: any) => item?.label,
      },
      {
        name: 'geonames',
        iconUrl: '/img/geonames128.png',
        description: 'GeoNames',
        label: 'ID',
        service: geonames,
        itemIdGetter: (item: any) => item?.geonameId,
        itemLabelGetter: (item: any) => item?.name,
      },
      {
        name: 'whg',
        iconUrl: '/img/whg128.png',
        description: 'World Historical Gazetteer',
        label: 'ID',
        service: whg,
        itemIdGetter: (item: GeoJsonFeature) => item?.properties.place_id,
        itemLabelGetter: (item: GeoJsonFeature) => item?.properties.title,
      },
    ] as RefLookupConfig[]);
  }

  public ngOnInit(): void {
    this.user = this._authService.currentUserValue || undefined;
    this.logged = this.user !== null;

    this._subs.push(
      this._authService.currentUser$.subscribe((user: User | null) => {
        this.logged = this._authService.isAuthenticated(true);
        this.user = user || undefined;
        if (user) {
          this._appRepository.load();
        }
      })
    );

    this._subs.push(
      this._appRepository.itemBrowserThesaurus$.subscribe(
        (thesaurus: Thesaurus | undefined) => {
          this.itemBrowsers = thesaurus ? thesaurus.entries : undefined;
        }
      )
    );
  }

  public ngOnDestroy(): void {
    this._subs.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public getItemBrowserRoute(id: string): string {
    return this._itemBrowserKeys[id] || id;
  }

  public logout(): void {
    if (!this.logged) {
      return;
    }
    this._authService.logout().subscribe((_) => {
      this._router.navigate(['/home']);
    });
  }
}
