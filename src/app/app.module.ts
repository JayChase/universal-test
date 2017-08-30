import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpTransferModule } from 'ngx-universal';
import { HttpModule } from '@angular/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MdSidenavModule, MdButtonModule, MdToolbarModule, MdIconModule, MdListModule } from '@angular/material';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AppComponent } from './app.component';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app-root'
    }),
    BrowserAnimationsModule,
    HttpTransferModule.forRoot(),
    HttpModule,
    HttpClientModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // }),
    ShareButtonsModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'comp1',
        component: Comp1Component
      },
      {
        path: 'comp2',
        component: Comp2Component
      },
      {
        path: '',
        redirectTo: 'comp1',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: Comp1Component
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
