import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { OrdersState } from 'src/store/order/orders.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthState } from 'src/store/auth/auth.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      OrdersState,
      AuthState
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: [
        OrdersState,
        AuthState
      ],
      storage: StorageOption.LocalStorage
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
