import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { AnnouncementComponent } from './announcement/announcement.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
