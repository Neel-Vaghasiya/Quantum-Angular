import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AlertComponent } from './shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    DashboardModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
