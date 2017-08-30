import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserStateTransferModule } from 'ngx-universal';

@NgModule({
    imports: [
        AppModule,
        BrowserStateTransferModule.forRoot()

    ],
    bootstrap: [AppComponent],
})
export class AppBrowserModule {
    constructor() {
        let stateValue: any;

        const win: any = window;

        if (win) {
            stateValue = win['test_key'];
            console.log('server transition test_key: ' + stateValue);
        }

        // do something with the value acquired
        // whatever you want ...
    }
}
