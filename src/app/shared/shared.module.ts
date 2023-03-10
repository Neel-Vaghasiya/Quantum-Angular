import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AlertComponent,
    AnnouncementComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AlertComponent,
    AnnouncementComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
