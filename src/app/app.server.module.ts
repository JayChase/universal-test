import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerStateTransferModule, StateTransferService } from 'ngx-universal';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ServerStateTransferModule.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {
    // constructor(){}
    constructor(private readonly stateTransfer: StateTransferService) {
    }

    ngOnBootstrap = () => {
        this.stateTransfer.set('test_key', JSON.stringify({ 'value': 'test' }));
        this.stateTransfer.inject();
    }
}
